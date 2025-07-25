import React from 'react';
import { Verse as VerseType } from '../types/bible';

type Props = {
  number: string;
  verse: VerseType;
};

const Verse: React.FC<Props> = ({ number, verse }) => {
  return (
    <div className="mb-3  pb-2">
      <strong>{number}</strong>  {verse.translations.ru}
      {verse.commentary && (
        <div className="text-muted small mt-1">
          <em>К:</em> {verse.commentary.upContext.ru}
        </div>
      )}
    </div>
  );
};

export default Verse;
