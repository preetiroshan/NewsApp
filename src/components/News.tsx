import { Button, Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { TNews } from "../types";
import { getDateString } from "../utils";
import PublisherLink from "./PublisherLink";

type TNewsProps = {
  news: TNews;
  getPublishedNews?: (publisher: string, news?: TNews[]) => TNews[];
};

const News = ({ news, getPublishedNews }: TNewsProps) => {
  const { TITLE, TIMESTAMP, PUBLISHER, URL, HOSTNAME, CATEGORY } = news;
  const location = useLocation();

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>{TITLE}</Card.Title>
        <Row>
          <Col sm={6} className="m-0">
            <Button variant="warning">
              <a href={URL} target="_blank" rel="noreferrer">
                Read Now
              </a>
            </Button>
          </Col>
          {location.pathname === "/" && getPublishedNews && (
            <Col className="m-0">
              <Button variant="info">
                <PublisherLink
                  publisher={PUBLISHER}
                  getPublishedNews={getPublishedNews}
                />
              </Button>
            </Col>
          )}
        </Row>
        <Card.Text>
          <Row>
            <Col sm={6} className="m-0">
              <div className="mr-3 pr-3">
                <b className="mr-4">Source: </b>
                {HOSTNAME}
              </div>
            </Col>
            {location.pathname === "/" && getPublishedNews && (
              <Col className="m-0">
                <span>
                  <b>Category: </b>
                  {CATEGORY}
                </span>
              </Col>
            )}
          </Row>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <span>Published on:</span>
        <small className="text-muted ml-2">{getDateString(TIMESTAMP)}</small>
      </Card.Footer>
    </Card>
  );
};

export default News;
