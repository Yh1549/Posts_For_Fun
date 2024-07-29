import { DEFAULT_THEME } from "./const";

class ThemeController {
  static STORAGE_KEY = "theme";
  static DATA_ATTR = "data-theme";
  static ACTIVE_CLASS = "bg-primary";
  static THEME_BTN_LIST = document.querySelectorAll("button[data-theme]");

  #btnList = [];

  addBtnElement(ThemeControllerDetail) {
    this.#btnList.push(ThemeControllerDetail);
  }
  get getBtnList() {
    return this.#btnList;
  }
}

class ThemeControllerDetail {
  btn;
  theme;
  constructor(btn) {
    this.btn = btn;
    this.theme = this.btn.getAttribute(ThemeController.DATA_ATTR);
  }
  removeBtnActive() {
    this.btn.classList.remove(ThemeController.ACTIVE_CLASS);
  }
  addBtnActive() {
    this.btn.classList.add(ThemeController.ACTIVE_CLASS);
  }
  setTheme() {
    localStorage.setItem(ThemeController.STORAGE_KEY, this.theme);
    document.documentElement.setAttribute(
      ThemeController.DATA_ATTR,
      this.theme,
    );
    this.addBtnActive();
  }
  get getTheme() {
    return this.theme;
  }
}

const themeChange = (e, themeController) => {
  themeController.getBtnList.forEach((btn) => {
    btn.removeBtnActive();
  });
  e.setTheme();
};

// 頁面主題初始化
export const themeInit = () => {
  const initTheme = localStorage.getItem(ThemeController.STORAGE_KEY);
  const themeController = new ThemeController();
  // 如果先前沒有設定主題 則取預設主題
  if (initTheme === null) {
    document.documentElement.setAttribute(
      ThemeController.DATA_ATTR,
      DEFAULT_THEME,
    );
    initTheme = DEFAULT_THEME;
  } else
    document.documentElement.setAttribute(ThemeController.DATA_ATTR, initTheme);

  ThemeController.THEME_BTN_LIST.forEach((el) => {
    const themeControllerDetail = new ThemeControllerDetail(el);
    themeController.addBtnElement(themeControllerDetail);
    if (initTheme == themeControllerDetail.getTheme) {
      themeControllerDetail.addBtnActive();
    }
    el.addEventListener("click", (e) =>
      themeChange(themeControllerDetail, themeController),
    );
  });
};
