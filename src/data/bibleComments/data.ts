import { Comment } from "../../types/comment";
import { MatDataEn } from "../Mat/en/dataMatEn";
import { MatDataRu } from "../Mat/ru/dataMatRu";

export const data: Comment[] = [
  {
    id: 'mat',
    shortTitle: {
      ru: 'Мф',
      en: 'Mat'
    },
    title: {
      ru: 'Матфея',
      en: 'Matthew'
    },
    chapters: 28,
    isNewTestament: true,
    ru: MatDataRu,
    en: MatDataEn,
  },
]