import "./global.scss";
import { isLoggedIn } from "@wp/js/account";
import { initFavorites } from "@wp/js/favorites";
import { fixImageLinks } from "@wp/utils";
import { globalPageScripts } from "@wp/pages";
import { initSections } from "./page-loader";

if (isLoggedIn) {
  initFavorites()
}
fixImageLinks(document.images);
initSections(globalPageScripts);
