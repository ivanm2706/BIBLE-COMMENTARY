import { BookId } from "./BookId";


export type OutlineItem = {
  label: string;
  items?: OutlineItem[];
};

export type OutlineSection = {
  label: string;
  items?: OutlineItem[];
};

export type OutlinePart = {
  label: string;
  sections?: OutlineSection[];
  items?: OutlineItem[];
};

export type Outline = {
  title: string;
  parts: OutlinePart[];
};


export type Overview = {
   [overviewTitle: string]: string[];
}



export type Content = {
  paragraphs: string[];
}

export type CommentSection = {
  overview: Overview;
  content: Content;
  outline: Outline;
};

export type Chapter = {
  upContext: string[];
  downContext: string[];
  chapterCommentary: string[];
  block: string,
  verseCommentary: {
    [verseNumber: string]: {
      upContext: string[];
      commentaries: string[];
      downContext: string[];
      block: string;
    };
  }
}

export type Chapters = {
  [chapterNumber: string]: Chapter;
}

export type CommentContent = {
  title: string;
  subtitle: string;
  keyVerses: string[];
  sections: CommentSection;
  chapters: Chapters;
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