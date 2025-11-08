import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Task Tracker heading", () => {
  render(<App />);
  expect(screen.getByText("Task Tracker")).toBeInTheDocument();
});
