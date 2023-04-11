// store.js
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      data: null,
    });


    onMounted(async () => {
      const response = await fetch("/data.json");
      
      console.log(response);
      state.data = await response.json();
    });
    return {
      state,
    };
  },
};