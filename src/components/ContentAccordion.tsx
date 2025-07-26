import { Accordion, Card } from "react-bootstrap";
import { getNameAccordingLanguage } from "../utils/getNameAccordingLanguage";
import { CommentSection } from "../types/comment";

type Props = {
  lang: 'ru' | 'en';
  sections: CommentSection;
}

export default function ContentAccordion({ lang, sections }: Props) {
  return (
    <Accordion defaultActiveKey="true">
      <Card>
        <Accordion.Header>
          {getNameAccordingLanguage(lang, 'Содержание', 'Content')}
        </Accordion.Header>

        <Accordion.Body>
          {sections.content.paragraphs.map(p => (
            <ul key={p}>
              <li>{p}</li>
            </ul>
          ))}
        </Accordion.Body>
      </Card>
    </Accordion>
  )
}