import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyLinks } from ".";

describe("EmptyLinks", () => {
  it("should check a11y features", () => {
    render(<EmptyLinks />);

    // Caso inicial
    expect(screen.getByText("Yo si tengo contenido")).toBeInTheDocument();

    // Mejoramos con links
    expect(screen.getByRole("link")).toBeInTheDocument();

    // Añadimos capa de accesibilidad
    // expect(
    //   screen.getByRole("link", { name: /Yo si tengo/ })
    // ).toBeInTheDocument();

    // Verificamos que el botón está oculto
    // expect(
    //   screen.getByRole("link", { name: "Edit", hidden: true })
    // ).toBeInTheDocument();

    // Juego de links ocultos y visibles
    // expect(screen.getAllByRole("link", { hidden: true })).toHaveLength(2);
    // expect(screen.getAllByRole("link", { hidden: false })).toHaveLength(1);
  });
});
