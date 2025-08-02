import { Comment } from "../../types/comment";
import { MatDataEn } from "./en/dataMatEn";
import { MatDataRu } from "./ru/dataMatRu";

export const dataMat: Comment = {
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
};
