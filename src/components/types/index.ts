type ItemType = "BALANCE" | "ITEM";

export interface Item {
  id: string;
  code: string;
  type: ItemType;
  name: string;
  imageUrl: string;
}

type AttandanceStatusType = "READY" | "FINISH";

export interface Attendance {
  attandanceId: string;
  status: AttandanceStatusType;
  day: number;
  reward: Item;
}
