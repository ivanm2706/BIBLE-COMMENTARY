import React, { useState } from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { data } from '../data/bibleComments/data';

type Props = {
  bookId: string;
  lang: 'ru' | 'en';
};

const BookCommentPage: React.FC<Props> = ({ bookId, lang }) => {
  const comment = data.find(c => c.id === bookId);
  const content = comment?.[lang];

  const sections = content?.sections ?? {};

  if (!comment || !content) return <div>Книга не найдена</div>;

  return (
    <Container className="mt-4">
      <h2>{content.title}</h2>
      <p className="text-muted">{content.subtitle}</p>

      {Object.entries(sections).map(([sectionKey, sectionContent]) => {
        if (!sectionContent || typeof sectionContent === 'string') return null;

        return (
          <Accordion defaultActiveKey="">
            <Card>
              <Accordion.Item eventKey={sectionKey}>
                <Accordion.Header>
                  {sectionKey === 'overview' ? 'Обзор' : sectionKey === 'content' ? 'Содержание' : 'План'}
                </Accordion.Header>
                <Accordion.Body>
                  {Object.entries(sectionContent).map(([subTitle, paragraphs]) => (
                    <div key={subTitle} className="mb-3">
                      <strong>{subTitle}</strong>
                      <ul>
                        {paragraphs.map((p: string, idx: string) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default BookCommentPage;
