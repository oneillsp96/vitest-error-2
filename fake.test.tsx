import * as React from "react";
import { fireEvent, screen, render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./src/App";
import { test, describe, expect, vi } from "vitest";

test("we can see text in app.tsx", () => {
    render(<App />, {});
    expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("a silly test", () => {
    expect(1).toEqual(1);
});