import { Attendance, Item } from "@/components/types/index";
import { uuid } from "vue-uuid";

export const dummyItem: Item[] = [
  {
    id: uuid.v1(),
    code: "1",
    type: "ITEM",
    name: "물약",
    amount: 1,
    imageUrl: "portion.png",
  },
  {
    id: uuid.v1(),
    code: "2",
    type: "BALANCE",
    name: "골드 3000",
    amount: 3000,
    imageUrl: "money.png",
  },
  {
    id: uuid.v1(),
    code: "3",
    type: "ITEM",
    name: "루비 2000",
    amount: 2000,
    imageUrl: "ruby.png",
  },
  {
    id: uuid.v1(),
    code: "4",
    type: "ITEM",
    name: "티켓",
    amount: 2,
    imageUrl: "ticket.png",
  },
  {
    id: uuid.v1(),
    code: "5",
    type: "ITEM",
    name: "스킬 포션",
    amount: 1,
    imageUrl: "ticket.png",
  },
  {
    id: uuid.v1(),
    code: "6",
    type: "ITEM",
    name: "스킬 포션",
    amount: 1,
    imageUrl: "ticket.png",
  },
  {
    id: uuid.v1(),
    code: "7",
    type: "ITEM",
    name: "스킬 포션",
    amount: 1,
    imageUrl: "ticket.png",
  },
];

export const dummyAttendance: Attendance[] = [
  {
    attandanceId: uuid.v1(),
    day: 1,
    status: "READY",
    reward: dummyItem[0],
  },
  {
    attandanceId: uuid.v1(),
    day: 2,
    status: "READY",
    reward: dummyItem[1],
  },
  {
    attandanceId: uuid.v1(),
    day: 3,
    status: "READY",
    reward: dummyItem[2],
  },
  {
    attandanceId: uuid.v1(),
    day: 5,
    status: "READY",
    reward: dummyItem[3],
  },
  {
    attandanceId: uuid.v1(),
    day: 5,
    status: "READY",
    reward: dummyItem[4],
  },
  {
    attandanceId: uuid.v1(),
    day: 6,
    status: "READY",
    reward: dummyItem[5],
  },
  {
    attandanceId: uuid.v1(),
    day: 7,
    status: "READY",
    reward: dummyItem[6],
  },
];

export const dummyTwoWeekAttandance: Attendance[] =
  createDummyData(dummyAttendance);

export const dummyMonthAttandance: Attendance[] = createDummyData(
  dummyTwoWeekAttandance
);

function createDummyData(dummy: Attendance[]): Attendance[] {
  const newAttadance: Attendance[] = (
    dummy.concat(dummy) as Omit<Attendance, "attandanceId" | "status">[]
  ).map((attendance) => ({
    ...attendance,
    status: "READY",
    attandanceId: uuid.v1(),
  }));
  newAttadance.map((at) => (at.reward.id = uuid.v1()));
  return newAttadance;
}
