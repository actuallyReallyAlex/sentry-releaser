import chalk from "chalk";
import { spawn } from "child_process";
import inquirer from "inquirer";
import ora from "ora";

import { AppState } from "./types";

const createCreateReleaseCommand = (state: AppState) => {
  const projects = state.projects;
  if (!projects)
    throw new Error("Variable `projects` is undefined/null/falsey");
  const mappedCommands = projects
    .map((project: string) => ` -p ${project}`)
    .join("");
  return `sentry-cli releases new${mappedCommands} ${state.version}`;
};

const commandPromise = (state: AppState): Promise<void> =>
  new Promise((resolve, reject) => {
    const sentryAuthToken: string = state.config.get("sentryAuthToken");
    const sentryOrg: string = state.config.get("sentryOrg");
    const createReleaseCommand = createCreateReleaseCommand(state);

    const spinner = ora("Creating release").start();

    const shellProcess = spawn(
      `export SENTRY_AUTH_TOKEN=${sentryAuthToken} && echo TOKEN SET && export SENTRY_ORG=${sentryOrg} && echo ORG SET && VERSION=${state.version} && echo VERSION SET && ${createReleaseCommand} && sentry-cli releases set-commits --auto ${state.version} && echo COMMITS SET && sentry-cli releases finalize "${state.version}"`,
      { shell: true }
    );

    shellProcess.stderr.on("data", function (data) {
      console.log(data.toString());
      throw new Error(data.toString());
    });
    shellProcess.on("exit", function (exitCode) {
      if (exitCode === 0) {
        spinner.succeed(`${state.version} Released`);
        resolve();
      } else {
        spinner.warn("Error");
        reject();
      }
    });
  });

const createNewRelease = async (state: AppState): Promise<void> => {
  try {
    const answersVersion = await inquirer.prompt([
      {
        type: "input",
        name: "version",
        message: `${chalk.yellowBright("Version")}:`,
      },
    ]);
    const version: string = answersVersion.version;
    state.version = version;

    const answersProjects = await inquirer.prompt([
      {
        type: "input",
        name: "unseparatedProjects",
        message: `${chalk.yellowBright("Project(s)")}:`,
        suffix: `${chalk.dim(
          " For multiple projects, separate by a comma. Ex. 'project1,project2,project3'"
        )}`,
      },
    ]);
    const unseparatedProjects: string = answersProjects.unseparatedProjects;
    const separatedProjects: string[] = unseparatedProjects.split(/,/g);
    state.projects = separatedProjects;

    await commandPromise(state);
    console.log("\n");
  } catch (error) {
    console.error(error);
  }
};

export default createNewRelease;
