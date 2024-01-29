<script setup>
import { computed } from "vue";
import App from "../App.vue";

const themeOverrides = {
  Collapse: {

  },
  common:{
    
  }
};
const uzUz = {
  name: "uz-UZ",
  global: {
    undo: "Bekor qilish",
    redo: "Qayta qiling",
    confirm: "Tasdiqlash",
  },
  Popconfirm: {
    positiveText: "Tasdiqlash",
    negativeText: "Bekor qilish",
  },
  Cascader: {
    placeholder: "Iltimos tanlang",
    loading: "Yuklanmoqda",
    loadingRequiredMessage: (label) =>
      `Belgilashdan oldin ${label} ning barcha ichki elementlarini tanlang.`,
  },
  Time: {
    dateFormat: "dd.MM.yyyy",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "dd.MM.yyyy HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Tozalash",
    now: "Hozir",
    confirm: "Tasdiqlash",
    selectTime: "Vaqtni tanlang",
    selectDate: "Sanani tanlang",
    datePlaceholder: "Sanani tanlang",
    datetimePlaceholder: "Sana va vaqtni tanlang",
    monthPlaceholder: "Oyni tanlang",
    yearPlaceholder: "Yilni tanlang",
    quarterPlaceholder: "Chorakni tanlang",
    startDatePlaceholder: "Boshlanish sanasi",
    endDatePlaceholder: "Tugash sanasi",
    startDatetimePlaceholder: "Boshlanish sanasi va vaqti",
    endDatetimePlaceholder: "Tugash sanasi va vaqti",
    monthBeforeYear: true,
    firstDayOfWeek: 6,
    today: "Bugun",
  },
  DataTable: {
    checkTableAll: "Jadvaldagi barchasini tanlash",
    uncheckTableAll: "Jadvaldagi barcha tanlovni olib tashlash",
    confirm: "Tasdiqlash",
    clear: "Tozalash",
  },
  Transfer: {
    sourceTitle: "Manba",
    targetTitle: "Maqsad",
  },
  Empty: {
    description: "Maʼlumot yoʻq",
  },
  Select: {
    placeholder: "Iltimos tanlang",
  },
  TimePicker: {
    placeholder: "Vaqtni tanlang",
    positiveText: "OK",
    negativeText: "Bekor qilish",
    now: "Hozir",
  },
  Pagination: {
    goto: "O'tish",
    selectionSuffix: "sahifa",
  },
  DynamicTags: {
    add: "Qo'shish",
  },
  Log: {
    loading: "Yuklanmoqda",
  },
  Input: {
    placeholder: "Iltimos, kiriting",
  },
  InputNumber: {
    placeholder: "Iltimos, kiriting",
  },
  DynamicInput: {
    create: "Yaratmoq",
  },
  ThemeEditor: {
    title: "Mavzu muharriri",
    clearAllVars: "Barcha o'zgaruvchilarni tozalash",
    clearSearch: "Qidiruvni tozalash",
    filterCompName: "Filtr komponenti nomi",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default",
  },
  // TODO: translation
  Image: {
    tipPrevious: "Oldingi rasm (←)",
    tipNext: "Keyingi rasm (→)",
    tipCounterclockwise: "Soat miliga teskari",
    tipClockwise: "Soat yo'nalishi bo'yicha",
    tipZoomOut: "Kichraytirish",
    tipZoomIn: "Kattalashtirish",
    tipClose: "Yopish (Esc)",
  },
};
</script>
<template>
  <n-config-provider
    :locale="uzUz"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-loading-bar-provider>
              <App />
            </n-loading-bar-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>