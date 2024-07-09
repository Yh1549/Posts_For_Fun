import { DEFAULT_THEME } from "./const";
// 為什麼要用class 單純有點好奇javascript的類別
class THEME_CONTROLLER {
  static STORAGE_KEY = "theme";
  static DATA_ATTR = "data-theme";

  // button element for theme change
  btn;

  // atrribute data-theme's value from button element
  theme;

  // constructor take button element for arguments
  constructor(btn) {
    this.btn = btn;
    this.theme = this.btn.getAttribute(THEME_CONTROLLER.DATA_ATTR);
  }

  // method sets the theme to root element
  setTheme(e) {
    localStorage.setItem(THEME_CONTROLLER.STORAGE_KEY, this.theme);
    document.documentElement.setAttribute(
      THEME_CONTROLLER.DATA_ATTR,
      this.theme
    );
  }
}

// 頁面主題初始化
export const themeInit = () => {
  const INIT_THEME = localStorage.getItem(THEME_CONTROLLER.STORAGE_KEY);

  // 如果先前沒有設定主題 則取預設主題
  if (INIT_THEME === null) {
    document.documentElement.setAttribute(
      THEME_CONTROLLER.DATA_ATTR,
      DEFAULT_THEME
    );
  } else
    document.documentElement.setAttribute(
      THEME_CONTROLLER.DATA_ATTR,
      INIT_THEME
    );

  // 建立每個class
  const THEME_BTN_LIST = document.querySelectorAll("button[data-theme]");
  [...THEME_BTN_LIST].forEach((el) => {
    const themeController = new THEME_CONTROLLER(el);
    themeController.btn.addEventListener("click", (e) => {
      themeController.setTheme(e);
    });
  });
};
