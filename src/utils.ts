import { TNews } from "./types";

export const getDateString = (val: number) => {
  const date = new Date(val);
  const year = date.getFullYear().toString();
  const month = date.getMonth().toString();
  const day = date.getDate().toString();

  //change month length to 2 by appending zero, if original length is one
  const formatWithZero = (val: string) => {
    if (val.length < 2) {
      return "0" + val;
    }
    return val;
  };

  const dateArray = [formatWithZero(day), formatWithZero(month), year];
  const dateString = dateArray.join("/");
  return dateString;
};

export const sortNews = (news: TNews[]) =>
  news.sort((news1, news2) => {
    const date1 = new Date(news1.TIMESTAMP);
    const date2 = new Date(news2.TIMESTAMP);
    const val = date1 < date2 ? 1 : -1;
    return val;
  });
