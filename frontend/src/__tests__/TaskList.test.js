import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../TaskList";

// ✅ Mock the entire ../api module
jest.mock("../api", () => ({
  getTasks: jest.fn(),
  createTask: jest.fn(),
}));

// ✅ Import mocked functions after mocking
import { getTasks, createTask } from "../api";

// ✅ Setup mock implementations before each test
beforeEach(() => {
  getTasks.mockResolvedValue({ data: [] }); // returns an empty task list initially
  createTask.mockResolvedValue({ data: { id: 1, title: "Buy Milk" } });
});

test("renders heading", async () => {
  render(<TaskList />);
  expect(screen.getByText("Task Tracker")).toBeInTheDocument();
});

test("adds a new task", async () => {
  render(<TaskList />);

  const input = screen.getByPlaceholderText("Enter task");
  fireEvent.change(input, { target: { value: "Buy Milk" } });
  fireEvent.click(screen.getByText("Add"));

  const newTask = await screen.findByText("Buy Milk");
  expect(newTask).toBeInTheDocument();
});
