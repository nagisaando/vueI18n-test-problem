import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "@/App.vue";

import { i18n as i18nn } from "../i18n";
import { createI18n } from "vue-i18n";
it("This works", async () => {
  const i18n = createI18n({
    messages: {
      en: {},
      ja: {},
    },
  });
  const setup = () =>
    render(App, {
      global: {
        plugins: [i18n],
      },
    });
  console.log("======================= test 1 =======================");
  setup();
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
});
it("this does not work", async () => {
  let i18n = i18nn;
  const setup = () =>
    render(App, {
      global: {
        plugins: [i18n],
      },
    });
  console.log("======================= test 2 =======================");
  setup();
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
  screen.debug();
  await userEvent.click(screen.getByRole("button", { name: "change locale" }));
});
