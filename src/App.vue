<script setup>
import { useI18n } from "vue-i18n";
import { i18n } from "./i18n";
import Child from "./Child.vue";
const { t } = useI18n();
function changeLocale() {
  if (i18n.global.locale.value === "en") {
    i18n.global.locale.value = "ja";
  } else {
    i18n.global.locale.value = "en";
  }
}
</script>
<template>
  <p>{{ t("hello") }}</p>
  <button @click="changeLocale">change locale</button>
  <Child />
</template>

<i18n>
{
  "en": {
    "hello": "hello world!",
  },
  "ja": {
    "hello": "こんにちは、世界!",
  }
}
</i18n>
