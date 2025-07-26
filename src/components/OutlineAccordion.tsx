import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Outline, OutlineItem } from '../types/comment';

type Props = {
  outline: Outline;
};

const RenderItem: React.FC<{ item: OutlineItem; level: number }> = ({ item, level }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.items;

  return (
    <li className={`ms-${level * 2}`}>
      <div
        style={{ cursor: hasChildren ? 'pointer' : 'default' }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren && (
          <strong>{open ? '▼ ' : '▶ '}</strong>
        )}
        {item.label}
      </div>
      {hasChildren && open && (
        <ul className={`ms-2 mt-1`}>
          {item.items!.map((subItem, idx) => (
            <RenderItem key={idx} item={subItem} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const renderItems = (items: OutlineItem[], level = 1) => {
  return (
    <ul className={`ms-${level * 2}`}>
      {items.map((item, idx) => (
        <RenderItem key={idx} item={item} level={level} />
      ))}
    </ul>
  );
};

const OutlineAccordion: React.FC<Props> = ({ outline }) => {
  return (
    <div className="mt-4">
      <h4 className="mb-3">{outline.title}</h4>
      <Accordion alwaysOpen>
        {outline.parts.map((part, i) => (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{part.label}</Accordion.Header>
            <Accordion.Body>
              {part.sections?.map((section, j) => (
                <div key={j} className="mb-3">
                  <strong>{section.label}</strong>
                  {section.items && renderItems(section.items)}
                </div>
              ))}
              {part.items && renderItems(part.items)}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default OutlineAccordion;
