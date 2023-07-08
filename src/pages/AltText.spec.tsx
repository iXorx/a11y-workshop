import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AltText } from ".";

describe("AltText", () => {
  it("should render without crashing", () => {
    render(<AltText />);

    // expect(screen.getByText("AltText")).toBeInTheDocument();

    expect(screen.getByRole("img", { name: "" })).toBeInTheDocument();
  });
});
