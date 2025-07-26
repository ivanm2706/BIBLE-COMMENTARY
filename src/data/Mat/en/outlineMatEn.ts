import { Outline } from "../../../types/comment";

export const outlineEn: Outline = {
  title: 'Outline of the Gospel of Matthew',
  parts: [
    {
      label: 'I) Prologue 1:1–4:11',
      sections: [
        {
          label: '1. Arrival of the King (1:1–2:23)',
          items: [
            { label: '1.1 Genealogy (1:1–17)' },
            { label: '1.2 Birth (1:18–25)' },
            {
              label: '1.3 Childhood (2:1–23)',
              items: [
                { label: '1.3.1 In Bethlehem (2:1–12)' },
                { label: '1.3.2 In Egypt (2:13–18)' },
                { label: '1.3.3 In Nazareth (2:19–23)' }
              ]
            }
          ]
        },
        {
          label: '2. Preparation of the King (3:1–4:11)',
          items: [
            { label: '2.1 The Forerunner (3:1–12)' },
            { label: '2.2 Baptism (3:13–17)' },
            { label: '2.3 Temptation (4:1–11)' }
          ]
        }
      ]
    },
    {
      label: 'II) Main Section 4:12–26:2',
      sections: [
        {
          label: 'A) First Block – Early Followers and the Righteousness of the Kingdom',
          items: [
            {
              label: '1. The King Describes the Nature of the Kingdom (4:12–7:29)',
              items: [
                {
                  label: '1.1 Narrative: Beginning of Ministry (4:12–25)',
                  items: [
                    { label: '1.1.1 Beginning of Preaching (4:12–17)' },
                    { label: '1.1.2 Beginning of Calling Disciples (4:18–22)' },
                    { label: '1.1.3 Beginning of Healings and Miracles (4:23–25)' }
                  ]
                },
                {
                  label: '1.2 First Discourse (5:1–7:29)',
                  items: [
                    { label: '1.2.1 Setting of the Sermon (5:1–2)' },
                    { label: '1.2.2 Content (5:3–7:27)' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
