import React, { useState } from 'react';
import { Container, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const StartPage: React.FC = () => {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/book');
  };

  const toggleLang = (val: 'ru' | 'en') => {
    setLang(val);
  };

  return (
    <AnimatedPage>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <div className="position-absolute top-0 end-0 m-3">
          <ToggleButtonGroup type="radio" name="lang" value={lang} onChange={toggleLang}>
            <ToggleButton id="lang-ru" variant="outline-secondary" value="ru" size="sm">
              ru
            </ToggleButton>
            <ToggleButton id="lang-en" variant="outline-secondary" value="en" size="sm">
              en
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <h1 className="mb-4">
          {lang === 'ru' ? 'Библейский комментарий' : 'Bible Commentary'}
        </h1>

        <Button size="lg" onClick={handleStart}>
          {lang === 'ru' ? 'начать' : 'start'}
        </Button>
      </Container>
    </AnimatedPage>
  );
};

export default StartPage;
