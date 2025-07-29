import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { BookId } from '../types/BookId';
import { data } from '../data/bibleComments/data';
import { getNameAccordingLanguage } from '../utils/getNameAccordingLanguage';
import { useAppSelector } from '../hooks/hooks';
import { ParsedComment } from './ParsedComment';

const CommentDisplay = () => {
  const { bookId } = useParams<{ bookId: BookId }>();
  const [searchParams] = useSearchParams();
  const lang = useAppSelector(state => state.mode.lang);

  const chapterNum = Number(searchParams.get('chapter')) || 1;
  const verseNum = Number(searchParams.get('verse')) || 1;

  const verseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Найти нужную книгу
  const comment = data.find((c) => c.id === bookId);
  const langContent = comment?.[lang];
  const chapter = langContent?.chapters?.[String(chapterNum)];

  useEffect(() => {
     if (verseNum !== 1) {
      const el = verseRefs.current[String(verseNum)];
      if (el) {
        const rect = el.getBoundingClientRect();
        const offset = window.pageYOffset + rect.top - 70; // 80px вверх
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    }
  }, [verseNum]);

  if (!comment || !chapter) {
    return <div>Комментарий не найден</div>;
  }

  return (
    <Container className='pt-5'>
      <p className="text-muted ">Глава {chapterNum}</p>

      <div className="mb-3">
         <div className="text-muted">
          {!chapter.upContext.length || getNameAccordingLanguage(lang, 'Верхний контекст: ', 'Up context: ')}
          <ParsedComment text={chapter.upContext.join(' ')} />
        </div>
        <div className="fw-bold">{chapter.chapterCommentary.join(' ')}</div>
        <div className="text-muted mt-2">
          {!chapter.downContext.length || getNameAccordingLanguage(lang, 'Нижний контекст: ', 'Down context: ')}
          <ParsedComment text={chapter.downContext.join(' ')}/>
        </div>
      </div>

      <hr />

      {Object.entries(chapter.verseCommentary).map(([verseId, verse]) => (
        <div
          key={verseId}
          ref={(el) => {(verseRefs.current[verseId] = el)}}
          className="mb-4 border-start border-3 ps-3"
        >
          <h5>Стих {verseId}</h5>
          <div className="text-muted">
            {!verse.upContext.length || getNameAccordingLanguage(lang, 'Верхний контекст: ', 'Up context: ')}
            <ParsedComment text={verse.upContext.join(' ')} />
          </div>
          <div>
            {verse.commentaries.map((comment, index) => (
              <div key={index}>
                <ParsedComment text={comment} />
              </div>
            ))}
          </div>
          <div className="text-muted pt-3">
            {!verse.downContext.length || getNameAccordingLanguage(lang, 'Нижний контекст: ', 'Down context: ')}
            <ParsedComment text={verse.downContext.join(' ')} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CommentDisplay;
