import { AppState } from "./types";
import inquirer from "inquirer";
import chalk from "chalk";

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

    console.log("\n----------");

    console.log(`${chalk.yellowBright("version")} - ${state.version}`);
    console.log(`${chalk.yellowBright("projects")} - ${state.projects.length}`);
    console.log("\n");
  } catch (error) {
    console.error(error);
  }
};

export default createNewRelease;
