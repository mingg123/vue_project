import {
  eris_50000_ImgUrl,
  power_potion_big_5_ImgUrl,
  ticket_10_ImgUrl,
  ticket_20_ImgUrl,
} from "./../components/utils/imageUtil";
import { beef_1_ImgUrl, quartz_100_ImgUrl } from "@/components/utils/imageUtil";
import { Attendance, day, Item, Quest } from "@/types/index";
import { uuid } from "vue-uuid";

const now = new Date();
export const dummyDate = now.getDate();

export const dummyItem: Item[] = [
  {
    id: uuid.v1(),
    code: "1",
    type: "ITEM",
    name: "quartz",
    amount: 100,
    imageUrl: quartz_100_ImgUrl,
  },
  {
    id: uuid.v1(),
    code: "2",
    type: "ITEM",
    name: "beef",
    amount: 1,
    imageUrl: beef_1_ImgUrl,
  },
  {
    id: uuid.v1(),
    code: "3",
    type: "ITEM",
    name: "beef",
    amount: 1,
    imageUrl: beef_1_ImgUrl,
  },
  {
    id: uuid.v1(),
    code: "4",
    type: "ITEM",
    name: "티켓",
    amount: 20,
    imageUrl: ticket_20_ImgUrl,
  },
  {
    id: uuid.v1(),
    code: "5",
    type: "ITEM",
    name: "티켓",
    amount: 10,
    imageUrl: ticket_10_ImgUrl,
  },
  {
    id: uuid.v1(),
    code: "6",
    type: "BALANCE",
    name: "재화",
    amount: 50000,
    imageUrl: eris_50000_ImgUrl,
  },
  {
    id: uuid.v1(),
    code: "7",
    type: "ITEM",
    name: "포션",
    amount: 5,
    imageUrl: power_potion_big_5_ImgUrl,
  },
];

export const dummyWeek: Attendance[] = [
  {
    attandanceId: uuid.v1(),
    day: 1,
    status: "READY",
    reward: deepCopy(dummyItem[0]),
  },
  {
    attandanceId: uuid.v1(),
    day: 2,
    status: "READY",
    reward: deepCopy(dummyItem[1]),
  },
  {
    attandanceId: uuid.v1(),
    day: 3,
    status: "READY",
    reward: deepCopy(dummyItem[2]),
  },
  {
    attandanceId: uuid.v1(),
    day: 5,
    status: "READY",
    reward: deepCopy(dummyItem[3]),
  },
  {
    attandanceId: uuid.v1(),
    day: 5,
    status: "READY",
    reward: deepCopy(dummyItem[4]),
  },
  {
    attandanceId: uuid.v1(),
    day: 6,
    status: "READY",
    reward: deepCopy(dummyItem[5]),
  },
  {
    attandanceId: uuid.v1(),
    day: 7,
    status: "READY",
    reward: deepCopy(dummyItem[6]),
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
];
dummyQuest.map((at) => (at.reward.id = uuid.v1()));

export const dummyTwoWeek: Attendance[] = createDummyData(dummyWeek);

export const dummyMonth: Attendance[] = createDummyData(dummyTwoWeek);

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
    return dummyWeek;
  } else if (day === "14") {
    return dummyTwoWeek;
  } else {
    return dummyMonth;
  }
}

function deepCopy(data: unknown) {
  return JSON.parse(JSON.stringify(data));
}
