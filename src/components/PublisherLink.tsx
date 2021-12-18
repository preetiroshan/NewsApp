import { Link } from "react-router-dom";
import { TNews } from "../types";

type TPublisherLinkProps = {
  publisher: string;
  getPublishedNews: (publisher: string, news?: TNews[]) => TNews[];
};

const PublisherLink = ({
  publisher,
  getPublishedNews
}: TPublisherLinkProps) => {
  return (
    <Link
      to={{
        pathname: `/${publisher.replace(" ", "")}`
      }}
      state={{
        publishedNews: getPublishedNews(publisher)
      }}
    >
      {publisher}
    </Link>
  );
};

export default PublisherLink;
