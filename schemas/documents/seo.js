import icon from "../../assets/search";

export default {
  name: "seo",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "page",
      type: "string",
    },
    {
      name: "description",
      type: "text",
      description:
        "This is the description that users get to see in the Google search results || max 150 characters",
    },
    {
      name: "keywords",
      type: "string",
      description: "max 4 key words || seperatet by a ,",
    },
  ],
};
