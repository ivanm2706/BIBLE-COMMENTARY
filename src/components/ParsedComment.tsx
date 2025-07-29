import { Link } from 'react-router-dom';
import { parseCommentParts } from '../utils/parseCommentParts';
import * as React from 'react'; // или
import type { JSX } from 'react'; // если только для типов
import { useAppSelector } from '../hooks/hooks';

type Props = {
  text: string;
  LinkComponent?: (props: { to: string; children: React.ReactNode }) => JSX.Element;
};

export function ParsedComment({ text, LinkComponent = DefaultLink }: Props) {
  const lang = useAppSelector(state => state.mode.lang);
  const parts = parseCommentParts(text, lang);

  return (
    <>
      {parts.map((part, idx) =>
        typeof part === 'string' ? (
          <span key={idx}>{part}</span>
        ) : (
          <LinkComponent key={idx} to={part.href}>
            {part.text}
          </LinkComponent>
        )
      )}
    </>
  );
}

// По умолчанию — react-router Link
const DefaultLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#0056b3' }}>
    {children}
  </Link>
);

