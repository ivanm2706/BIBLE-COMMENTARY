import { Chapters } from "../../../types/comment";

export const chaptersMatEn: Chapters = {
  '1': {
    upContext: ['chapter up context'],
    downContext: ['chapter down context'],
    chapterCommentary: ['chapter commentary'],
    block: 'prologue',
    verseCommentary: {
      '1': {
        upContext: ['verse up context'],
        commentaries: ['verse commentary'],
        downContext: ['down context'],
        block: 'miracles',
      },
      '2': {
        upContext: ['verse up context2'],
        commentaries: ['verse commentary2'],
        downContext: ['down context2'],
        block: 'miracles2',
      },
    }
  }
};
