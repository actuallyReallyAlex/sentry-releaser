import EventEmitter from "events";
import Configstore from "configstore";

export interface AppState {
  config: Configstore;
  menuAction: MenuAction;
  menuActionEmitter: EventEmitter.EventEmitter;
  projects: string[] | null;
  version: string | null;
}

export type MenuAction = "createNewRelease" | "about" | "exit" | null;
