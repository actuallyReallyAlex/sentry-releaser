import clear from "clear";
import Configstore from "configstore";
import EventEmitter from "events";
import { titleScreen } from "pickitt";

import { displayMainMenu, interpretMenuAction } from "./menu";
import setup from "./setup";
import { AppState } from "./types";

const main = async (): Promise<void> => {
  const menuActionEmitter = new EventEmitter.EventEmitter();
  menuActionEmitter.on("actionCompleted", async (state: AppState) => {
    await titleScreen("Sentry Releaser");
    await displayMainMenu(state);
    await interpretMenuAction(state);
  });

  const config = new Configstore("sentry-releaser");

  const state: AppState = {
    config,
    menuAction: null,
    menuActionEmitter,
  };

  try {
    const isSetUp: boolean = config.get("isSetUp");

    if (!isSetUp) {
      await setup(state);
      clear();
    }

    await titleScreen("Sentry Releaser");
    await displayMainMenu(state);

    await interpretMenuAction(state);
  } catch (e) {
    console.error("ERROR");
    console.log(state);
    console.error(e);
  }
};

main();
