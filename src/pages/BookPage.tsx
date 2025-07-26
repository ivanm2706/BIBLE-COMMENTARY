/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ChapterVerseNav } from '../components/ChapterVerseNav';
import { CommentDisplay } from '../components/CommentDisplay';

const BookPage = () => {
  const { bookId = 'mat', chapter = '1' } = useParams();
  console.log(bookId, chapter);

  return (
    <div className="p-3">
    </div>
  );
};

export default BookPage;
