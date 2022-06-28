export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
  }

  export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
    target: T;
  }
}

export type day = "7" | "14" | "28";
export type language = "English" | "Korean";
export type languageJson = "en" | "ko";

export enum Language {
  en = "English",
  ko = "Korean",
}

type ItemType = "BALANCE" | "ITEM";

export interface Item {
  id: string;
  code: string;
  type: ItemType;
  name: string;
  amount: number;
  imageUrl: string;
}

export interface Attendance {
  attandanceId: string;
  status: QuestStatusType;
  day: number;
  reward: Item;
}

export type QuestStatusType = "READY" | "FINISH" | "RUNNING";

export interface Quest {
  id: string;
  title: string;
  subTitle: string;
  reward: Item;
  status: QuestStatusType;
}

export class Input {}
