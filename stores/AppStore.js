// store.js
import { reactive } from "vue";

const AppState = reactive({
  menu_open: false,
})

function toggleMenu() {
  AppState.menu_open = !AppState.menu_open;
}
export default {
  AppState, toggleMenu
}