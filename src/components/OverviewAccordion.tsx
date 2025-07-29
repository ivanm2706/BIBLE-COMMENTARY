import { Accordion, Card } from "react-bootstrap";
import { getNameAccordingLanguage } from "../utils/getNameAccordingLanguage";
import { CommentSection } from "../types/comment";
import { ParsedComment } from "./ParsedComment";

type Props = {
  lang: 'ru' | 'en';
  sections: CommentSection;
}

export default function OverviewAccordion({ lang, sections }: Props) {
  return (
    <Accordion defaultActiveKey="true">
        <Card>
          <Accordion.Header>
            {getNameAccordingLanguage(lang, 'Обзор', 'Overview')}
          </Accordion.Header>

          <Accordion.Body>
            {Object.entries(sections.overview).map(([subTitle, parag]) => (
              <div key={subTitle} className="mb-3">
                <strong>{subTitle}</strong>

                <ul>
                  {parag.map(p => (
                    <li key={p}>
                      <ParsedComment text={p} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Accordion.Body>
        </Card>
      </Accordion>
  )
}