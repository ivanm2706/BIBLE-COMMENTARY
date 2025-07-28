import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import LangModeButton from '../components/LangModeButton';
import { useAppSelector } from '../hooks/hooks';
import { data } from '../data/bibleComments/data';
import { Chapters, Comment } from '../types/comment';

export const getOldTestament = (commentaries: Comment[]): Comment[] => {
  return commentaries.filter(e => !e.isNewTestament);
}

export const getNewTestament = (commentaries: Comment[]): Comment[] => {
  return commentaries.filter(e => e.isNewTestament);
}


const BookSelectionPage: React.FC = () => {
  const lang = useAppSelector(state => state.mode.lang);
  const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [selectedBook, setSelectedBook] = useState<string | null>(null);
    const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
    const [selectedVerse, setSelectedVerse] = useState<number | null>(null);

    const handleGo = (verseOverride?: number) => {
      if (!selectedBook) return;
      const chapter = selectedChapter || 1;
      const verse = verseOverride || selectedVerse || 1;
      setShow(false);

      navigate(`/book/${selectedBook}?chapter=${chapter}&verse=${verse}`);
    };

  const handleBookClick = (bookId: string) => {
    setSelectedBook(bookId);
    setShow(true);
  };

  return (
    <AnimatedPage>
      <Container className="py-4 position-relative">
        <div className='position-absolute top-0 end-0 p-3'>
          <LangModeButton />
        </div>

        <h5 className="mb-2">{lang === 'ru' ? 'Ветхий Завет' : 'Old Testament'}</h5>
        <Row xs={3} sm={4} md={6} lg={8} className="g-2 mb-4">
          {getOldTestament(data).map(comment => (
            <Col key={comment.id}>
              <Button
                variant="outline-secondary"
                className="w-100"
                onClick={() => handleBookClick(comment.id)}
              >
                {comment.shortTitle[lang]}
              </Button>
            </Col>
          ))}
        </Row>

        <h5 className="mb-2">{lang === 'ru' ? 'Новый Завет' : 'New Testament'}</h5>
        <Row xs={3} sm={4} md={6} lg={8} className="g-2">
          {getNewTestament(data).map(comment => (
            <Col key={comment.id}>
              <Button
                variant="outline-secondary"
                className="w-100"
                onClick={() => handleBookClick(comment.id)}
              >
                {comment.shortTitle[lang]}
              </Button>
            </Col>
          ))}
        </Row>
        
        <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {lang === 'ru' ? 'Перейти к тексту' : 'Jump to text'}
              &nbsp;-&nbsp;
              {data.find(e => e.id === selectedBook)?.title[lang]}&nbsp;
              {selectedChapter || 1}:{selectedVerse || 1}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* CHAPTER SELECTION */}
            {!selectedChapter && (
              <>
                <h5 className="mt-3">
                  {lang === 'ru' ? 'Выберите главу' : 'Select chapter'}
                </h5>
                <Row className="g-2 mt-2">
                  {Object.keys(data.find(b => b.id === selectedBook)?.[lang]?.chapters as Chapters ?? {}).map((ch) => (
                    <Col xs={3} sm={2} key={ch}>
                      <Button
                        variant="outline-secondary"
                        className="w-100"
                        onClick={() => {setSelectedChapter(Number(ch))}}
                      >
                        {ch}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </>
            )}

            {/* VERSE SELECTION */}
            {selectedBook && selectedChapter && (
              <>
                <h5 className="mt-3">
                  {lang === 'ru' ? 'Выберите стих' : 'Select verse'}
                </h5>
                <Row className="g-2 mt-2">
                  {Object.keys(data.find(b => b.id === selectedBook)?.[lang]?.chapters[selectedChapter].verseCommentary ?? {}).map((v) => (
                    <Col xs={3} sm={2} key={v}>
                      <Button
                        variant="outline-success"
                        className="w-100"
                        onClick={() => {
                          handleGo(Number(v));
                        }}
                      >
                        {v}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setSelectedChapter(null);
                setSelectedVerse(null);
              }}
            >
              {lang === 'ru' ? 'Сброс' : 'Reset'}
            </Button>
            <Button
              variant="primary"
              disabled={!selectedBook}
              onClick={() => handleGo()}
            >
              Go
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </AnimatedPage>
  );
};

export default BookSelectionPage;
