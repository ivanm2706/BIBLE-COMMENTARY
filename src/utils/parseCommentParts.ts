import { data } from "../data/bibleComments/data";

export type ParsedPart = string | {
  href: string;
  text: string;
};


export function parseCommentParts(text: string, lang: 'ru' | 'en'): ParsedPart[] {
  const regex = /([А-ЯЁA-Z][а-яёa-zA-Z]+)\.?\s?(\d+)(?:(?:[:.,])(\d+))?/g;
  const parts: ParsedPart[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const [matchedText, bookRaw, chapterStr, verseStr] = match;
    const matchStart = match.index;
    const matchEnd = regex.lastIndex;

    const chapter = Number(chapterStr);
    const verse = verseStr ? Number(verseStr) : 1;

    if (lastIndex < matchStart) {
      parts.push(text.slice(lastIndex, matchStart));
    }

    const book = data.find(c => c.shortTitle?.[lang] === bookRaw);
    const bookId = book?.id;
    const chapterFromData = book?.[lang]?.chapters?.[chapterStr];

    const verseTarget = chapterFromData
      ? Object.keys(chapterFromData.verseCommentary || {})
          .map(Number)
          .sort((a, b) => b - a)
          .find(e => e <= verse) ?? 1
      : 1;

    if (bookId && chapterFromData) {
      const href = `/book/${bookId}?chapter=${chapter}&verse=${verseTarget}`;
      parts.push({ href, text: matchedText });
    } else {
      parts.push(matchedText);
    }

    lastIndex = matchEnd;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
