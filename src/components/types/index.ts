export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
  }

  export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
    target: T;
  }
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

type AttandanceStatusType = "READY" | "FINISH";

export interface Attendance {
  attandanceId: string;
  status: AttandanceStatusType;
  day: number;
  reward: Item;
}

export type QuestStatusType = AttandanceStatusType | "RUNNING";

export interface Quest {
  id: string;
  title: string;
  subTitle: string;
  reward: Item;
  status: QuestStatusType;
}

export class Input {}
