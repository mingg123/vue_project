import { Attendance, Item } from "@/components/types/index";

export const dummyItem: Item[] = [
  {
    id: "1",
    code: "1",
    type: "ITEM",
    name: "물약",
    imageUrl: "http",
  },
  {
    id: "2",
    code: "2",
    type: "BALANCE",
    name: "골드 3000",
    imageUrl: "http",
  },
  {
    id: "3",
    code: "3",
    type: "ITEM",
    name: "쿠키 2000",
    imageUrl: "http",
  },
];

export const dummyAttendance: Attendance[] = [
  {
    attandanceId: "1",
    day: 1,
    status: "READY",
    reward: dummyItem[0],
  },
  {
    attandanceId: "2",
    day: 2,
    status: "READY",
    reward: dummyItem[1],
  },
  {
    attandanceId: "3",
    day: 3,
    status: "READY",
    reward: dummyItem[2],
  },
];
