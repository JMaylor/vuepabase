import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import VButton from "../VButton.vue";

describe("VButton", () => {
  it("renders some text", () => {
    const text = "Test Button";
    const wrapper = mount(VButton, {
      slots: {
        default: {
          render: () => "Test Button",
        },
      },
    });

    const button = wrapper.get("button");
    expect(button.text()).toContain(text);
  });

  it("renders loading icon", () => {
    const wrapper = mount(VButton, { props: { loading: true } });
    const svg = wrapper.get("svg");
    expect(svg);
  });
});
