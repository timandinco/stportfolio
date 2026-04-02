export default {
  name: "projectItem",
  title: "Project Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "url",
      title: "Project URL (optional)",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "year",
      title: "Year (optional)",
      type: "number",
    },
  ],
};