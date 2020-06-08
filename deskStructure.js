import S from "@sanity/desk-tool/structure-builder";
import Logo from "./assets/Logo";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Dust Media")
        .icon(Logo)
        .child(
          S.editor()
            .schemaType("dustMedia")
            .documentId("dustMedia")
            .title("Dust Media")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["dustMedia"].includes(listItem.getId())
      ),
    ]);
