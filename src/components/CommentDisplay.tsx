import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { BookId } from '../types/BookId';
import { data } from '../data/bibleComments/data';

const CommentDisplay = () => {
  const { bookId } = useParams<{ bookId: BookId }>();
  const [searchParams] = useSearchParams();

  const chapterNum = Number(searchParams.get('chapter')) || 1;
  const verseNum = Number(searchParams.get('verse')) || 1;

  const verseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Найти нужную книгу
  const comment = data.find((c) => c.id === bookId);
  const langContent = comment?.ru; // Или en, если нужно
  const chapter = langContent?.chapters?.[String(chapterNum)];

  useEffect(() => {
    if (verseNum !== 1 && verseRefs.current[String(verseNum)]) {
      verseRefs.current[String(verseNum)]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [verseNum]);

  if (!comment || !chapter) {
    console.log(chapter)
    return <div>Комментарий не найден</div>;
  }

  return (
    <Container>
      <h3 className="mb-2">
        {langContent.title} — {langContent.subtitle}
      </h3>

      <p className="text-muted">Глава {chapterNum}</p>

      <div className="mb-3">
        <div className="text-muted">{chapter.upContext.join(' ')}</div>
        <div className="fw-bold">{chapter.chapterCommentary.join(' ')}</div>
        <div className="text-muted">{chapter.downContext.join(' ')}</div>
      </div>

      <hr />

      {Object.entries(chapter.verseCommentary).map(([verseId, verse]) => (
        <div
          key={verseId}
          ref={(el) => {(verseRefs.current[verseId] = el)}}
          className="mb-4 border-start border-3 ps-3"
        >
          <h5>Стих {verseId} — {verse.block}</h5>
          <div className="text-muted">{verse.upContext.join(' ')}</div>
          <div>{verse.commentaries.join(' ')}</div>
          <div className="text-muted">{verse.downContext.join(' ')}</div>
        </div>
      ))}
    </Container>
  );
};

export default CommentDisplay;
