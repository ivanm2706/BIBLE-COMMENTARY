import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import LangModeButton from '../components/LangModeButton';
import { useAppSelector } from '../hooks/hooks';
import { data as commentary } from '../data/bibleComments/data';
import { Comment } from '../types/comment';

export const getOldTestament = (commentaries: Comment[]): Comment[] => {
  return commentaries.filter(e => !e.isNewTestament);
}

export const getNewTestament = (commentaries: Comment[]): Comment[] => {
  return commentaries.filter(e => e.isNewTestament);
}


const BookSelectionPage: React.FC = () => {
  const lang = useAppSelector(state => state.mode.lang);
  const navigate = useNavigate();

  const handleBookClick = (bookId: string) => {
    navigate(`/book/${bookId}`)
  };

  return (
    <AnimatedPage>
      <Container className="py-5 position-relative">
        <LangModeButton />

        <h5 className="mb-2">{lang === 'ru' ? 'Ветхий Завет' : 'Old Testament'}</h5>
        <Row xs={3} sm={4} md={6} lg={8} className="g-2 mb-4">
          {getOldTestament(commentary).map(comment => (
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
          {getNewTestament(commentary).map(comment => (
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
      </Container>
    </AnimatedPage>
  );
};

export default BookSelectionPage;
