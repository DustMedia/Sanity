import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import newA from "./schemas/arrays/newA";
import dustMedia from "./schemas/documents/dustMedia";
import seo from "./schemas/documents/seo";
import videos from "./schemas/documents/videos";
import about from "./schemas/objects/about";
import contact from "./schemas/objects/contact";
import socials from "./schemas/objects/socials";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    newA,
    about,
    socials,
    contact,
    dustMedia,
    videos,
    seo,
  ]),
});
