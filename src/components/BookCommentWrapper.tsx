import { useParams } from "react-router-dom";
import BookCommentPage from "../pages/BookCommentPage";

// Обёртка, чтобы вытащить bookId из URL
export default function BookCommentWrapper() {
  const { bookId } = useParams();
  console.log(bookId)
  

  return <BookCommentPage bookId={bookId || ''} />;
};
