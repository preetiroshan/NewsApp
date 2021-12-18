import { TNews } from "../types";
import News from "./News";

type TNewsGRidProps = {
  data: TNews[];
  getPublishedNews: (publisher: string, news?: TNews[]) => TNews[];
};
const NewsGrid = ({ data, getPublishedNews }: TNewsGRidProps) => {
  return (
    <>
      {data.map((item, key) => (
        <News key={item.ID} news={item} getPublishedNews={getPublishedNews} />
      ))}
    </>
  );
};

export default NewsGrid;
