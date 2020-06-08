import { env } from "./netlify";

export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "codesandbox",
    },
    {
      name: "netlify",
      options: {
        title: "Netlify",
        sites: [
          {
            title: "dustmedia",
            apiId: env.id,
            buildHookId: env.hook,
            name: "dustmedia",
          },
        ],
      },
    },
  ],
};
