import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Offcanvas, Nav } from 'react-bootstrap';

type Props = {
  bookId: string;
  chapterId: string;
  verses: string[];
  selectedVerseId?: string;
};

export const ChapterVerseNav: React.FC<Props> = ({
  bookId,
  chapterId,
  verses,
  selectedVerseId,
}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClick = (verseId: string) => {
    navigate(`/book/${bookId}/${chapterId}/${verseId}`);
    setShow(false);
  };

  return (
    <>
      {/* Mobile button for opening offcanvas */}
      <div className="d-sm-none d-flex justify-content-end mb-2">
        <Button
  variant="light"
  size="sm"
  onClick={() => setShow(true)}
  className="rounded-pill shadow-sm border text-primary fw-semibold px-3 py-1"
  style={{ transition: 'all 0.2s ease-in-out' }}
>
  📖 
</Button>
      </div>

      {/* Desktop navigation */}
      <div className="chapter-nav-wrapper d-none d-sm-block mb-3">
        <Nav variant="pills" className="chapter-nav-inner px-2">
          {verses.map((verse) => (
            <Nav.Item key={verse} className="me-2">
              <Nav.Link
                active={verse === selectedVerseId}
                onClick={() => handleClick(verse)}
                className="px-3 py-1 rounded-pill text-nowrap"
              >
                {verse}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      {/* Offcanvas for mobile navigation */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Стихи главы {chapterId}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {verses.map((verse) => (
              <Nav.Item key={verse} className="mb-2">
                <Button
                  variant={verse === selectedVerseId ? 'primary' : 'outline-secondary'}
                  size="sm"
                  className="w-100"
                  onClick={() => handleClick(verse)}
                >
                  Стих {verse}
                </Button>
              </Nav.Item>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
