import icon from "../../assets/video";

export default {
  name: "videos",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "video",
      type: "string",
    },
    {
      name: "image",
      type: "image",
    },
  ],
};
