import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';
import { newTestamentNames, oldTestamentNames } from '../data/books/books';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';


const BookSelectionPage: React.FC = () => {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const navigate = useNavigate();

  const toggleLang = (val: 'ru' | 'en') => {
    setLang(val);
  };

  const handleBookClick = (bookId: string) => {
    navigate(`/book/${bookId}`)
  };

  return (
    <AnimatedPage>
      <Container className="py-4">
        <div className="d-flex justify-content-end mb-3">
          <ToggleButtonGroup type="radio" name="lang" value={lang} onChange={toggleLang}>
            <ToggleButton id="lang-ru" variant="outline-primary" value="ru" size="sm">
              ru
            </ToggleButton>
            <ToggleButton id="lang-en" variant="outline-primary" value="en" size="sm">
              en
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <h5 className="mb-2">{lang === 'ru' ? 'Ветхий Завет' : 'Old Testament'}</h5>
        <Row xs={3} sm={4} md={6} lg={8} className="g-2 mb-4">
          {Object.entries(oldTestamentNames).map(([id, book]) => (
            <Col key={id}>
              <Button
                variant="outline-secondary"
                className="w-100"
                onClick={() => handleBookClick(id)}
              >
                {book[lang]}
              </Button>
            </Col>
          ))}
        </Row>

        <h5 className="mb-2">{lang === 'ru' ? 'Новый Завет' : 'New Testament'}</h5>
        <Row xs={3} sm={4} md={6} lg={8} className="g-2">
          {Object.entries(newTestamentNames).map(([id, book]) => (
            <Col key={id}>
              <Button
                variant="outline-secondary"
                className="w-100"
                onClick={() => handleBookClick(id)}
              >
                {book[lang]}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </AnimatedPage>
  );
};

export default BookSelectionPage;
