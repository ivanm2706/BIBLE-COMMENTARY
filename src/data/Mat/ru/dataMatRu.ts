import { CommentContent } from "../../../types/comment";
import { chaptersMatRu } from "./chaptersMatRu";
import { contentRu } from "./contentMatRu";
import { outlineRu } from "./outlineMatRu";
import { overviewRu } from "./overviewMatRu";

export const MatDataRu: CommentContent = {
  title: 'Евангелие от Матфея',
  subtitle: 'Иисус был и есть обещанный Мессия и Царь Израиля, который установит Царство в будущем, несмотря на прошлое Его отвержение.',
  keyVerses: [
    "'С тех пор Иисус начал проповедовать в Галилее. 'Покайтесь, - говорил Он, - ибо приблизилось Царство Небесное'' Мф.4:17",
    "С этого времени Иисус начал открывать ученикам, что Ему надлежит идти в Иерусалим и перенести много страданий от старейшин, первосвященников и книжников. Там Его убьют, но на третий день будет Он воскрешен. Мф.16:21",
  ],
  sections: {
    overview: overviewRu,
    content: contentRu,
    outline: outlineRu,
  },
  chapters: chaptersMatRu,
};
