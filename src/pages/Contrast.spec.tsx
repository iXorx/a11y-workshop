import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import ColorContrastChecker from "color-contrast-checker";

describe("Contrast", () => {
  it("should check contrast", () => {
    render(
      <div style={{ backgroundColor: "#000", color: "#444" }}>
        <span style={{ color: "#fff" }}>target</span>
      </div>
    );

    const target = screen.getByText("target");
    const computed = getComputedStyle(target);

    let parentTarget = target.parentElement;
    let bgColor;
    while (parentTarget) {
      bgColor =
        getComputedStyle(parentTarget).getPropertyValue("background-color");
      if (bgColor !== "rgba(0, 0, 0, 0)") {
        break;
      }
      parentTarget = parentTarget.parentElement;
    }
    const textColor = computed.getPropertyValue("color");
    // expect(textColor).toBe("#444");
    // expect(bgColor).toBe("#333");

    const ccc = new ColorContrastChecker();
    expect(ccc.isLevelAA(textColor, bgColor, 14)).toBe(true);
  });
});
