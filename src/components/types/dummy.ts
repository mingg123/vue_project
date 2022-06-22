import { Attendance, Item, Quest } from "@/components/types/index";
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
    reward: JSON.parse(JSON.stringify(dummyItem[0])),
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

export const dummyQuest: Quest[] = [
  {
    title: "게임 접속",
    subTitle: "매일 게임 접속 시 아이템 지급",
    reward: dummyItem[1],
    status: "RUNNING",
  },
  {
    title: "뽑기 1회",
    subTitle: "매일 뽑기 1회 완료 시 아이템 지급",
    reward: dummyItem[2],
    status: "READY",
  },
  {
    title: "아르바이트 MAX 달성 1회",
    subTitle: "매일 프리퀘스트 완료 시 아이템 지급",
    reward: dummyItem[3],
    status: "FINISH",
  },
  {
    title: "프리퀘스트 10회",
    subTitle: "매일 프리퀘스트 완료 시 아이템 지급",
    reward: dummyItem[4],
    status: "READY",
  },
  {
    title: "메인 퀘스트 노멀 10회",
    subTitle: "매일 메인 퀘스트 노멀 완료 시 아이템 지급",
    reward: dummyItem[5],
    status: "RUNNING",
  },
  {
    title: "맴버의 한계돌파 5단계 10회 완성",
    subTitle: "한계돌파 5단계 10회 완성 시 아이템 지급",
    reward: dummyItem[6],
    status: "FINISH",
  },
  {
    title: "코노스바 스토리 n기 클리어",
    subTitle: "코노스바 스토리 n기 클리어 시 아이템 지급",
    reward: dummyItem[7],
    status: "RUNNING",
  },
];
export const dummyTwoWeekAttandance: Attendance[] =
  createDummyData(dummyAttendance);

export const dummyMonthAttandance: Attendance[] = createDummyData(
  dummyTwoWeekAttandance
);

function createDummyData(dummy: Attendance[]): Attendance[] {
  const newAttadance: Attendance[] = (
    JSON.parse(JSON.stringify(dummy.concat(dummy))) as Omit<
      Attendance,
      "attandanceId" | "status"
    >[]
  ).map((attendance) => ({
    ...attendance,
    status: "READY",
    attandanceId: uuid.v1(),
  }));
  newAttadance.map((at) => (at.reward.id = uuid.v1()));
  return newAttadance;
}
