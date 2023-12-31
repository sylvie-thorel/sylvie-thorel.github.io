const $themeSwitch = document.querySelector('[data-js="theme-switcher"]');

const storageKey = "theme-preference";

const getTheme = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setTheme = (theme) => {
  localStorage.setItem("theme-preference", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

const onClick = () => {
  const theme = getTheme() === "dark" ? "light" : "dark";
  setTheme(theme);
};

$themeSwitch?.addEventListener("click", onClick);
