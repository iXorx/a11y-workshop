import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Lang } from ".";

describe("Lang", () => {
  it("should check a11y features", () => {
    render(<Lang />);

    // screen.debug();

    let topParent = screen.getByText("Lang page content");
    while (topParent.parentElement) {
      if (topParent.getAttribute("lang")) {
        break;
      }
      topParent = topParent.parentElement;
    }

    expect(topParent).toHaveAttribute("lang", "en");
  });
});
