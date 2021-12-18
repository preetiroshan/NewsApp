import { useState } from "react";
import { TNews } from "../types";
import PublisherLink from "./PublisherLink";

import { Button, Dropdown, Offcanvas } from "react-bootstrap";

type TPublisherMenu = {
  publisherList: string[];
  getPublishedNews: (publisher: string, news?: TNews[]) => TNews[];
};

const PublisherMenu = ({ publisherList, getPublishedNews }: TPublisherMenu) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Choose Publisher
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Choose from the Publishers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {publisherList.map((publisher, key) => (
            <Dropdown.Item key={key} href={`/${publisher}`}>
              <Button key={key} className="me-2" variant="warning">
                <PublisherLink
                  getPublishedNews={getPublishedNews}
                  publisher={publisher}
                />
              </Button>
            </Dropdown.Item>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PublisherMenu;
