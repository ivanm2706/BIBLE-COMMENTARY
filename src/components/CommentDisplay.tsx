import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

type Props = {
  chapterData: {
    block: string;
    upContext: string[];
    downContext: string[];
    chapterCommentary: string[];
    verseCommentary: {
      [verseId: string]: {
        block: string;
        upContext: string[];
        commentaries: string[];
        downContext: string[];
      };
    };
  };
  selectedVerseId?: string;
};

export const CommentDisplay: React.FC<Props> = ({ chapterData, selectedVerseId }) => {
  const verseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (selectedVerseId && verseRefs.current[selectedVerseId]) {
      verseRefs.current[selectedVerseId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedVerseId]);

  return (
    <Container>
      <div className="text-muted">{chapterData.upContext.join(' ')}</div>
      <div className="fw-bold">{chapterData.chapterCommentary.join(' ')}</div>
      <div className="text-muted">{chapterData.downContext.join(' ')}</div>

      <hr />

      {Object.entries(chapterData.verseCommentary).map(([verse, data]) => (
        <div
          key={verse}
          ref={(el) => {verseRefs.current[verse] = el}}
          className="mb-4 border-start border-3 ps-3"
        >
          <h5 id={`verse-${verse}`}>
            Verse {verse} — Block: {data.block}
          </h5>
          <div className="text-muted">{data.upContext.join(' ')}</div>
          <div>{data.commentaries.join(' ')}</div>
          <div className="text-muted">{data.downContext.join(' ')}</div>
        </div>
      ))}
    </Container>
  );
};
