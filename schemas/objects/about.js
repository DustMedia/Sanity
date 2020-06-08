export default {
  title: "about",
  name: "about",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    { name: "title", type: "string" },

    {
      name: "about",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
    },
  ],
};
