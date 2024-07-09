import { DEFAULT_THEME } from "./const";

class THEME_CONTROLLER {
  static STORAGE_KEY = "theme";
  static DATA_ATTR = "data-theme";
  btn;
  theme;
  constructor(btn) {
    this.btn = btn;
    this.theme = this.btn.getAttribute(THEME_CONTROLLER.DATA_ATTR);
  }
  setTheme(e) {
    localStorage.setItem(THEME_CONTROLLER.STORAGE_KEY, this.theme);
    document.documentElement.setAttribute(
      THEME_CONTROLLER.DATA_ATTR,
      this.theme
    );
  }
}
export const themeInit = (arg) => {
  const INIT_THEME = localStorage.getItem(THEME_CONTROLLER.STORAGE_KEY);

  if (INIT_THEME === null) {
    document.documentElement.setAttribute(
      THEME_CONTROLLER.DATA_ATTR,
      DEFAULT_THEME
    );
    INIT_THEME = DEFAULT_THEME;
  } else
    document.documentElement.setAttribute(
      THEME_CONTROLLER.DATA_ATTR,
      INIT_THEME
    );

  const THEME_BTN_LIST = document.querySelectorAll("button[data-theme]");
  [...THEME_BTN_LIST].forEach((el) => {
    const themeController = new THEME_CONTROLLER(el);
    themeController.btn.addEventListener("click", (e) => {
      themeController.setTheme(e);
    });
  });
};
