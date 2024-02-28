import { ref } from "vue";
import { defineStore } from "pinia";

export const City = defineStore("citys", () => {
  let cityAll = ref([]),
  cityOne = ref({}),
  lang = ref("en")
  return { cityAll, cityOne,lang};
});
