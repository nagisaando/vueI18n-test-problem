<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <p>{{ t("error.system_error") }}</p>
</template>
