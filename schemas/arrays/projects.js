export default {
  name: "projects",
  type: "array",
  of: [{ type: "reference", to: [{ type: "videos" }], weak: true }],
  options: {
    filter: "title == $title",
    filterParams: { title: "Home" },
  },
};
