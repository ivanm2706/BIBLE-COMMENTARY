export const getNameAccordingLanguage = (lang: 'ru' | 'en', nameRu: string, nameEn: string) => {
  switch (lang) {
    case 'ru':
      return nameRu;

    case 'en':
      return nameEn;

    default:
      throw new Error('no apropriate lang');
  }
}