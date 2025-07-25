import { useParams } from "react-router-dom";
import BookCommentPage from "../pages/BookCommentPage";

// Обёртка, чтобы вытащить bookId из URL
export default function BookCommentWrapper() {
  const { bookId } = useParams();
  const lang = 'ru'; // либо из useAppSelector

  return <BookCommentPage bookId={bookId || ''} lang={lang} />;
};
