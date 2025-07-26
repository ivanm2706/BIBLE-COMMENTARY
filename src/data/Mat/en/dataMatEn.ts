import { CommentContent } from "../../../types/comment";
import { chaptersMatEn } from "./chaptersMatEn";
import { contentEn } from "./contentMatEn";
import { outlineEn } from "./outlineMatEn";
import { overviewEn } from "./overviewMatEn";

export const MatDataEn: CommentContent = {
  title: 'The Gospel of Matthew',
  subtitle: 'Jesus was and is the promised Messiah and King of Israel, who will establish the Kingdom in the future, despite being rejected in the past.',
  keyVerses: [
    "'From that time Jesus began to preach in Galilee, saying: “Repent, for the Kingdom of Heaven is near.”' Matt. 4:17",
    "From then on Jesus began to show His disciples that He must go to Jerusalem and suffer many things from the elders, chief priests, and scribes, be killed, and be raised on the third day. Matt. 16:21",
  ],
  sections: {
    overview: overviewEn,
    content: contentEn,
    outline: outlineEn,
  },
  chapters: chaptersMatEn,
};
