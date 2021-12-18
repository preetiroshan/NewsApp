import { useLocation, useParams } from "react-router";
import { TNews } from "../../types";
import News from "../News";

type TPublisherPageProps = {
  news: TNews[];
};

const PublisherPage = ({ news }: TPublisherPageProps) => {
  const { publisher } = useParams();
  const location = useLocation();
  console.log(publisher, useParams(), useLocation());
  const publishedNews: TNews[] = location.state
    ? location.state.publishedNews
    : [];

  return (
    <>
      <h3>
        News Published by
        <span className="text-success">{publisher}</span>{" "}
      </h3>
      {publishedNews.map((publication, key) => (
        <News key={key} news={publication} />
      ))}
    </>
  );
};

export default PublisherPage;
