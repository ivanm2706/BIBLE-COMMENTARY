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
    isNewTestament: true,
    ru: MatDataRu,
    en: MatDataEn,
  },
]