// parseBibleChapter.js
const fs = require('fs');
const path = require('path');

// Чтение входного файла
const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.json');
const outputPath2 = path.join(__dirname, 'output2.json');

const text = fs.readFileSync(inputPath, 'utf-8');
const bookObj = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));


// Разделяем по строкам
const lines = text.split('\n');

// Результат: объект, где ключ — номер стиха

let verseRegex = /^(\d+)\s(.+)/;
    console.log(bookObj.chapters["1"]["1"].translations.ru)

const createVerseObj =() => ({
        "translations": {
          "ru": "",
          "en": ""
        },
        "commentary": {
          "upContext": {
            "ru": "",
            "en": ""
          },
          "downContext": {
            "ru": "",
            "en": ""
          },
          "block": ""
        }
      });

for (let line of lines) {
  line = line.trim();
  if (!line) continue;

  const match = line.match(verseRegex);
  if (match) {
    const verseNumber = match[1];
    const verseText = match[2];

    if (!bookObj.chapterContent[`${verseNumber}`]) {
      bookObj.chapterContent[`${verseNumber}`] = createVerseObj();
    }

    bookObj.chapters["1"][`${verseNumber}`].translations.en = verseText;
  }
}

// Записываем в JSON
fs.writeFileSync(outputPath2, JSON.stringify(bookObj, null, 2), 'utf-8');
console.log('✅ JSON успешно создан:');

// node ./parseBibleChapter/parseBibleChapter.js
