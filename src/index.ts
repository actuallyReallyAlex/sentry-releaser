import EventEmitter from "events";
import { titleScreen } from "pickitt";

import { displayMainMenu, interpretMenuAction } from "./menu";
import { AppState } from "./types";

const main = async (): Promise<void> => {
  const menuActionEmitter = new EventEmitter.EventEmitter();
  menuActionEmitter.on("actionCompleted", async (state: AppState) => {
    await titleScreen("Sentry Releaser");
    await displayMainMenu(state);
    await interpretMenuAction(state);
  });

  const state: AppState = {
    menuAction: null,
    menuActionEmitter,
  };

  try {
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
