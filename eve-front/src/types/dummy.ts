import { Attendance, day, Item, Quest } from "@/types/index";
import { uuid } from "vue-uuid";
import { getAllItem } from "@/API/ItemAxios";

const now = new Date();
export const dummyDate = now.getDate();

export const dummyItem: Item[] = [
  {
    id: uuid.v1(),
    code: "1",
    type: "ITEM",
    name: "quartz",
    amount: 100,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/achievement/honeyItem/quartz_100.png",
  },
  {
    id: uuid.v1(),
    code: "2",
    type: "ITEM",
    name: "beef",
    amount: 1,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/achievement/honeyItem/stemina_beef_1.png",
  },
  {
    id: uuid.v1(),
    code: "3",
    type: "ITEM",
    name: "beef",
    amount: 1,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/achievement/honeyItem/stemina_beef_1.png",
  },
  {
    id: uuid.v1(),
    code: "4",
    type: "ITEM",
    name: "티켓",
    amount: 20,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/achievement/honeyItem/skip_ticket_20.png",
  },
  {
    id: uuid.v1(),
    code: "5",
    type: "ITEM",
    name: "티켓",
    amount: 10,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/achievement/honeyItem/skip_ticket_10.png",
  },
  {
    id: uuid.v1(),
    code: "6",
    type: "BALANCE",
    name: "재화",
    amount: 50000,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/attendance/specialBonus28Day/eris_50000.png",
  },
  {
    id: uuid.v1(),
    code: "7",
    type: "ITEM",
    name: "포션",
    amount: 5,
    imageUrl:
      "https://qa-eve.nexon.com/eve/ui/images/konosuba/attendance/specialBonus28Day/power_potion_big_5.png",
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
    reward: JSON.parse(JSON.stringify(dummyItem[1])),
  },
  {
    attandanceId: uuid.v1(),
    day: 3,
    status: "READY",
    reward: JSON.parse(JSON.stringify(dummyItem[2])),
  },
  {
    attandanceId: uuid.v1(),
    day: 5,
    status: "READY",
    reward: JSON.parse(JSON.stringify(dummyItem[3])),
  },
  {
    attandanceId: uuid.v1(),
    day: 5,
    status: "READY",
    reward: JSON.parse(JSON.stringify(dummyItem[4])),
  },
  {
    attandanceId: uuid.v1(),
    day: 6,
    status: "READY",
    reward: JSON.parse(JSON.stringify(dummyItem[5])),
  },
  {
    attandanceId: uuid.v1(),
    day: 7,
    status: "READY",
    reward: JSON.parse(JSON.stringify(dummyItem[6])),
  },
];

export const dummyQuest: Quest[] = [
  {
    id: uuid.v1(),
    title: "login_title",
    subTitle: "login_subtitle",
    reward: dummyItem[0],
    status: "RUNNING",
  },
  {
    id: uuid.v1(),
    title: "arena_title",
    subTitle: "arena_subtitle",
    reward: dummyItem[1],
    status: "READY",
  },
  {
    id: uuid.v1(),
    title: "quest_title",
    subTitle: "quest_subtitle",
    reward: dummyItem[2],
    status: "FINISH",
  },
  {
    id: uuid.v1(),
    title: "hard_title",
    subTitle: "hard_subtitle",
    reward: dummyItem[3],
    status: "READY",
  },
  {
    id: uuid.v1(),
    title: "free_title",
    subTitle: "free_subtitle",
    reward: dummyItem[4],
    status: "RUNNING",
  },
  // {
  //   id: uuid.v1(),
  //   title: "맴버의 한계돌파 5단계 10회 완성",
  //   subTitle: "한계돌파 5단계 10회 완성 시 아이템 지급",
  //   reward: dummyItem[5],
  //   status: "FINISH",
  // },
  // {
  //   id: uuid.v1(),
  //   title: "코노스바 스토리 n기 클리어",
  //   subTitle: "코노스바 스토리 n기 클리어 시 아이템 지급",
  //   reward: dummyItem[6],
  //   status: "RUNNING",
  // },
];
dummyQuest.map((at) => (at.reward.id = uuid.v1()));

export const dummyTwoWeekAttandance: Attendance[] =
  createDummyData(dummyAttendance);

export const dummyMonthAttandance: Attendance[] = createDummyData(
  dummyTwoWeekAttandance
);

// 7일 데이터로 14, 28일 만듬.
// 임의로 오늘 날짜 이후의 날(day) 같은 경우에는 보상받을 수 없도록 status 지정
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
  newAttadance.map((at, idx) => {
    if (idx + 1 > dummyDate) {
      at.status = "RUNNING";
    }
    at.reward.id = uuid.v1();
  });
  return newAttadance;
}

export function getDummyDataFromDay(day: day): Attendance[] {
  if (day === "7") {
    return dummyAttendance;
  } else if (day === "14") {
    return dummyTwoWeekAttandance;
  } else {
    return dummyMonthAttandance;
  }
}
