import React from 'react';
import { Container } from 'react-bootstrap';
import { data } from '../data/bibleComments/data';
import { useAppSelector } from '../hooks/hooks';
import OutlineAccordion from '../components/OutlineAccordion';
import OverviewAccordion from '../components/OverviewAccordion';
import ContentAccordion from '../components/ContentAccordion';
import { useParams } from 'react-router-dom';
import BookNav from '../components/BookNav';
import CommentDisplay from '../components/CommentDisplay';
import { ParsedComment } from '../components/ParsedComment';

const BookCommentPage: React.FC = () => {
  const { bookId = '' } = useParams();

  const lang = useAppSelector(state => state.mode.lang);
  const comment = data.find(c => c.id === bookId);
  const content = comment?.[lang];
  const sections = content?.sections;

  if (!sections || !content) return <div>{lang === 'ru' ? 'Книга не найдена' : 'Book not found'}</div>;

  return (
    <Container className="position-relative">
      <BookNav />

      <div style={{ paddingTop: "80px" }}>
        <h2>{content.title}</h2>
      </div>
      
      <p className="text-center fw-bold">{content.subtitle}</p>

      {content.keyVerses.map(vers => (
        <p className="text-end fst-italic" key={vers} >
          <ParsedComment text={vers}/>
        </p>
      ))}

      <OverviewAccordion lang={lang} sections={sections} /> 

      <ContentAccordion lang={lang} sections={sections} />    

      <OutlineAccordion outline={sections.outline}/>

      <CommentDisplay />
    </Container>
  );
};

export default BookCommentPage;
