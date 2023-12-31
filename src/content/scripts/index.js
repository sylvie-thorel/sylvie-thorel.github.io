import "./theme.js";
import "./search.js";
import tippy from "tippy.js";

/**@type {NodeListOf<HTMLAnchorElement>} */
const footnotesRefs = document.querySelectorAll("sup.footnote-ref a");

footnotesRefs.forEach((el) => {
  const noteId = el.textContent;
  const target = document.getElementById(`fn${noteId}`);
  const content = target?.textContent?.replace("↩︎", "");
  if (!content) return;
  tippy(el, {
    content,
  });
});
