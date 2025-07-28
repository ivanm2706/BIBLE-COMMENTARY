import React from 'react';
import { Container } from 'react-bootstrap';
import { data } from '../data/bibleComments/data';
import { useAppSelector } from '../hooks/hooks';
import OutlineAccordion from '../components/OutlineAccordion';
import OverviewAccordion from '../components/OverviewAccordion';
import ContentAccordion from '../components/ContentAccordion';
import { useParams, useSearchParams } from 'react-router-dom';
import BookNav from '../components/BookNav';
import CommentDisplay from '../components/CommentDisplay';


const BookCommentPage: React.FC = () => {
  const { bookId = '' } = useParams();
  const [searchParams] = useSearchParams();
  const chapter: number = Number(searchParams.get('chapter')) || 1;
  const verse: number = Number(searchParams.get('verse')) || 1;
  console.log(chapter, verse);

  const lang = useAppSelector(state => state.mode.lang);
  const comment = data.find(c => c.id === bookId);
  const content = comment?.[lang];
  const sections = content?.sections;

  if (!sections || !content) return <div>{lang === 'ru' ? 'Книга не найдена' : 'Book not found'}</div>;

  return (
    <Container className="">
      <BookNav />

      <h2>{content.title}</h2>
      <p className="text-center fw-bold">{content.subtitle}</p>

      {content.keyVerses.map(vers => (
        <p className="text-end fst-italic" key={vers} >{vers}</p>
      ))}

      <OverviewAccordion lang={lang} sections={sections} /> 

      <ContentAccordion lang={lang} sections={sections} />    

      <OutlineAccordion outline={sections.outline}/>

      <CommentDisplay />
    </Container>
  );
};

export default BookCommentPage;
