import React from 'react';
import { Container } from 'react-bootstrap';
import { data } from '../data/bibleComments/data';
import LangModeButton from '../components/LangModeButton';
import { useAppSelector } from '../hooks/hooks';
import OutlineAccordion from '../components/OutlineAccordion';
import OverviewAccordion from '../components/OverviewAccordion';
import ContentAccordion from '../components/ContentAccordion';
import { ChapterVerseNav } from '../components/ChapterVerseNav';


type Props = {
  bookId: string;
};

const BookCommentPage: React.FC<Props> = ({ bookId }) => {
  const lang = useAppSelector(state => state.mode.lang);
  const comment = data.find(c => c.id === bookId);
  const content = comment?.[lang];
  
  const sections = content?.sections;

  if (!sections || !content) return <div>{lang === 'ru' ? 'Книга не найдена' : 'Book not found'}</div>;

  return (
    <Container className="">
      <ChapterVerseNav 
        bookId={bookId}
        chapterId="1"
        verses={Object.keys(content.chapters["1"].verseCommentary)}
        selectedVerseId="1"     
      />
      <Container className="mb-5 width-1 position-relative" style={{height: "1px"}}>
        <LangModeButton />
      </Container>

      <h2>{content.title}</h2>
      <p className="text-center fw-bold">{content.subtitle}</p>

      {content.keyVerses.map(vers => (
        <p className="text-end fst-italic" key={vers} >{vers}</p>
      ))}

      <OverviewAccordion lang={lang} sections={sections} /> 

      <ContentAccordion lang={lang} sections={sections} />    

      <OutlineAccordion outline={sections.outline}/>
    </Container>
  );
};

export default BookCommentPage;
