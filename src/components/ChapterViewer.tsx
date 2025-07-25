import { useState } from 'react';

type Block = {
  title: string;
  comment: string;
}


type CommentaryData = {
    chapter: number;
    blocks: Block[];
};

const commentaryData: CommentaryData[] = [
  {
    chapter: 1,
    blocks: [
      {
        title: 'Приветствие (1:1-5)',
        comment: 'Павел говорит о своем призвании Иисусом Христом, а не от людей...'
      },
      {
        title: 'Удивление отвержения благодати (1:6-10)',
        comment: 'Павел удивляется, что галаты так быстро уклонились от благодати...'
      }
    ]
  },
  {
    chapter: 2,
    blocks: [
      {
        title: 'Павел посещает Иерусалим (2:1-10)',
        comment: 'Павел рассказывает о согласии братьев с его благовестием...' 
      },
      {
        title: 'Обличение Петра (2:11-21)',
        comment: 'Павел упрекает Петра за притворство и отклонение от истины Евангелия...'
      }
    ]
  }
];

export default function GalatiansCommentaryApp() {
  const [selectedChapter, setSelectedChapter] = useState<null | CommentaryData>(null);
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);

  const handleChapterClick = (chapter: CommentaryData) => {
    setSelectedChapter(chapter || null);
    setSelectedBlock(null);
  };

  const handleBlockClick = (block: Block) => {
    setSelectedBlock(block);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Комментарий на Послание к Галатам</h1>

      <div className="flex gap-4">
        <div className="w-1/3 border-r pr-4">
          <h2 className="text-lg font-semibold mb-2">Главы</h2>
          {commentaryData.map((chapter) => (
            <div key={chapter.chapter}>
              <button
                className={`block w-full text-left py-1 px-2 rounded hover:bg-gray-100 ${selectedChapter?.chapter === chapter.chapter ? 'bg-gray-200' : ''}`}
                onClick={() => handleChapterClick(chapter)}
              >
                Глава {chapter.chapter}
              </button>
            </div>
          ))}
        </div>

        <div className="w-1/3 border-r pr-4">
          {selectedChapter && (
            <>
              <h2 className="text-lg font-semibold mb-2">Блоки</h2>
              {selectedChapter.blocks.map((block, i) => (
                <button
                  key={i}
                  className={`block w-full text-left py-1 px-2 rounded hover:bg-gray-100 ${selectedBlock?.title === block.title ? 'bg-gray-200' : ''}`}
                  onClick={() => handleBlockClick(block)}
                >
                  {block.title}
                </button>
              ))}
            </>
          )}
        </div>

        <div className="w-1/3">
          {selectedBlock && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Комментарий</h2>
              <p className="whitespace-pre-line">{selectedBlock.comment}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
