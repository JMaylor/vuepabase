import { mount } from "@cypress/vue";
import VButton from "../VButton.vue";

describe("VButton", () => {
  it("renders some text", () => {
    const text = "Test Button";
    mount(VButton, {
      slots: {
        default: {
          render: () => "Test Button",
        },
      },
    });

    cy.get("button").should("contain", text);
  });

  it("renders loading icon", () => {
    mount(VButton, { props: { loading: true } });
    cy.get("svg").should("exist");
  });
});
