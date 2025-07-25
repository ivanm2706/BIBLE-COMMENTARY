import { data } from "../data/bibleComments/data";
import { BookId } from "../types/BookId";
import { Comment } from "../types/comment";

export default function findComment(id: BookId): null | Comment {
  const result = data.find(e => e.id === id);
  return result ? result : null;
}