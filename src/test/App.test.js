import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "@/App.vue";

import { i18n } from "../i18n";

const setup = () =>
  render(App, {
    global: {
      plugins: [i18n],
    },
  });

it("This works", async () => {
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