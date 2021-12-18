import { useEffect, useState } from "react";
import { getNews } from "../../service";
import NewsGrid from "../../components/NewsGrid";
import PublisherMenu from "../../components/PublisherMenu";
import { TNews } from "../../types";
import { sortNews } from "../../utils";

export type TPublicationDetails = {
  publisher: {
    name: string;
    publications: [];
  };
};

const HomePage = () => {
  const [data, setData] = useState<TNews[]>([]);

  const [publisherList, setPublisherList] = useState<string[]>([]);
  useEffect(() => {
    getNews().then((news: TNews[]) => {
      const list: string[] = [];
      news.forEach((item: TNews) => {
        if (!list.includes(item.PUBLISHER)) {
          list.push(item.PUBLISHER);
        }
      });
      setData(sortNews(news));
      setPublisherList(list.sort());
    });
  }, [setData, setPublisherList]);

  const getPublishedNews = (publisher: string, news: TNews[] = data) => {
    const published = news.filter((item) => {
      return item.PUBLISHER === publisher;
    });
    const sortedPublished = sortNews(published);
    return sortedPublished;
  };

  return (
    <>
      <div className="m-4 p-4">
        <PublisherMenu
          getPublishedNews={getPublishedNews}
          publisherList={publisherList}
        />
      </div>
      <div className="m-4 p-4">
        <NewsGrid getPublishedNews={getPublishedNews} data={data} />
      </div>
    </>
  );
};

export default HomePage;
