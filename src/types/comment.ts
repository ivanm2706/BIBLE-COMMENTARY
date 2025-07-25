import { BookId } from "./BookId";

type CommentSection = {
  overview: {
    [overviewTitle: string]: string[];
  };
  content: string;
  outline: string;
};

type CommentContent = {
  title: string;
  subtitle: string;
  keyVerses: string[];
  sections: CommentSection;
};

export type Comment = {
  id: BookId;
  shortTitle: {
    ru: string;
    en: string;
  };
  isNewTestament: boolean;
  ru: CommentContent;
  en?: CommentContent;
}