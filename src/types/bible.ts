export type TranslationVersion = {
  ru: string;
  en: string;
}

export type Commentary = {
  upContext: TranslationVersion;
  downContext: TranslationVersion;
  block: string;
};

export enum BibleBooks {
  Matthew = 'matthew',
  Mark = 'mark',
}

export type Verse = {
  translations: TranslationVersion;
  commentary: Commentary;
};

export type Structure = {
  id: string;
  title: TranslationVersion,
  chapters: number[];
};

export type ChapterContent = {
  [verseNumber: string]: Verse;
}

export type Chapter = {
  id: BibleBooks;
  name: TranslationVersion;
  structure: Structure[];
  chapterContent: ChapterContent  
};
