import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { useAppSelector } from '../hooks/hooks';
import LangModeButton from '../components/LangModeButton';

const StartPage: React.FC = () => {
  const lang = useAppSelector(state => state.mode.lang);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/book');
  };

  return (
    <AnimatedPage>
      <Container className="position-relative d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <div className='position-absolute top-0 end-0 p-3'>
          <LangModeButton />
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
