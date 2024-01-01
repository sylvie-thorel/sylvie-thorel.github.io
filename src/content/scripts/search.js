/**@type {HTMLButtonElement} */
const openBtn = document.querySelector('button[data-js="searchBtn"]');
/**@type {HTMLButtonElement} */
const closeBtn = document.querySelector('button[data-js="searchCloseBtn"]');
/**@type {HTMLDialogElement} */
const searchDialog = document.querySelector('dialog[data-js="searchDialog"]');
/**@type {HTMLElement} */
const wrapper = document.querySelector('[data-js="searchWrapper"]');

const openDialog = () => {
  searchDialog.showModal();
  document.addEventListener("click", clickOutside);
};

const closeDialog = () => {
  searchDialog.close();
  document.removeEventListener("click", clickOutside);
};

/**@param {MouseEvent} e */
const clickOutside = (e) => {
  if (
    document.body.contains(e.target) &&
    !wrapper?.contains(e.target) &&
    !openBtn?.contains(e.target)
  ) {
    closeDialog();
  }
};

openBtn?.addEventListener("click", openDialog);

closeBtn.addEventListener("click", closeDialog);

window.addEventListener("DOMContentLoaded", () => {
  new PagefindUI({
    element: "#search-ui",
    showSubResults: true,
    showImages: false,
    translations: {
      placeholder: "Rechercher",
      clear_search: "Effacer",
      load_more: "Charger plus de résultats",
      search_label: "Recherche sur ce site",
      filters_label: "Filtres",
      zero_results: "Aucun résultat pour [SEARCH_TERM]",
      many_results: "[COUNT] résultats pour [SEARCH_TERM]",
      one_result: "[COUNT] résultat pour [SEARCH_TERM]",
      alt_search:
        "Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place",
      search_suggestion:
        "Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:",
      searching: "Recherche [SEARCH_TERM]...",
    },
  });
});
