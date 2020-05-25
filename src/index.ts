import clear from "clear";
import Configstore from "configstore";
import EventEmitter from "events";
import { titleScreen } from "pickitt";
import * as Sentry from "@sentry/node";

import { displayMainMenu, interpretMenuAction } from "./menu";
import setup from "./setup";
import { AppState } from "./types";

Sentry.init({
  dsn:
    "https://3ab4a7c258ac4f2f91dc5fd4350a64e3@o202486.ingest.sentry.io/5252201",
  environment: process.env.NODE_ENV,
});

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
    projects: null,
    version: null,
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

export default main;
