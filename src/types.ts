import EventEmitter from "events";
import Configstore from "configstore";

export interface AppState {
  config: Configstore;
  menuAction: MenuAction;
  menuActionEmitter: EventEmitter.EventEmitter;
}

export interface MenuOptions {
  displayConfig: Function;
  "2": Function;
  "3": Function;
  about: Function;
  exit: Function;
}

export type MenuAction = "displayConfig" | "2" | "3" | "about" | "exit" | null;
