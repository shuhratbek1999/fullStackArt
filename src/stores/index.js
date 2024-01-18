import { ref } from "vue";
import { defineStore } from "pinia";

export const Register = defineStore("register", () => {
  let registratsiya = ref({})
  return { registratsiya};
});
