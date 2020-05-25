import EventEmitter from "events";
import Configstore from "configstore";

export interface AppState {
  // config: Configstore;
  menuAction: MenuAction;
  menuActionEmitter: EventEmitter.EventEmitter;
}

export interface MenuOptions {
  "1": Function;
  "2": Function;
  "3": Function;
  about: Function;
  exit: Function;
}

export type MenuAction = "1" | "2" | "3" | "about" | "exit" | null;
