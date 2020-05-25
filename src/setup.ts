import chalk from "chalk";
import clear from "clear";
import inquirer from "inquirer";
import { AppState } from "./types";

const setup = async (state: AppState): Promise<void> => {
  try {
    clear();

    console.log(
      `Welcome to ${chalk.yellowBright(
        "Sentry Releaser"
      )}! Let's walk you through the initial set up.\n`
    );

    const answersAuthToken = await inquirer.prompt([
      {
        type: "input",
        name: "sentryAuthToken",
        message: `Please enter your ${chalk.yellowBright(
          "Sentry Auth Token"
        )}:`,
      },
    ]);
    const sentryAuthToken: string = answersAuthToken.sentryAuthToken;
    state.config.set("sentryAuthToken", sentryAuthToken);

    const answersSentryOrg = await inquirer.prompt([
      {
        type: "input",
        name: "sentryOrg",
        message: `Please enter your ${chalk.yellowBright("Sentry Org")}:`,
      },
    ]);
    const sentryOrg: string = answersSentryOrg.sentryOrg;
    state.config.set("sentryOrg", sentryOrg);

    state.config.set("isSetUp", true);
  } catch (error) {
    console.error(error);
  }
};

export default setup;
