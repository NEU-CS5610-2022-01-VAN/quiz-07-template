import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders the App with initial state", () => {
  render(<App />);

  expect(screen.getByText("Gryffindor (0)")).toBeInTheDocument();
});

test("renders header counter", () => {
  render(<App />);

  const addButton = screen.getByLabelText(`Add James Carmona`);
  userEvent.click(addButton);

  expect(screen.getByText("Gryffindor (1)")).toBeInTheDocument();

  const secondAddButton = screen.getByLabelText(`Add Leslie Abbott`);
  userEvent.click(secondAddButton);

  expect(screen.getByText("Gryffindor (2)")).toBeInTheDocument();
});

test("select multiple items and then delete them", async () => {
  render(<App />);

  const addButtonForItem1 = screen.getByRole("button", {
    name: "Add Hector Adams",
  });

  userEvent.click(addButtonForItem1);

  expect(screen.getByText("Hector Adams")).toBeInTheDocument();

  const selectedItems1 = screen.queryAllByRole("listitem", {
    name: /selected-/,
  });
  expect(selectedItems1).toHaveLength(1);

  const deleteButtonForItem1 = screen.getByRole("button", {
    name: `Delete Hector Adams`,
  });

  userEvent.click(deleteButtonForItem1);

  expect(screen.getByText("Hector Adams")).toBeInTheDocument();

  const selectedItems2 = screen.queryAllByRole("listitem", {
    name: /selected-/,
  });
  expect(selectedItems2).toHaveLength(0);
});

test("search functionality filters the item list", () => {
  render(<App />);

  const searchInput = screen.getByPlaceholderText(
    "Search by name or department"
  );

  userEvent.type(searchInput, "James Carmona");

  const displayedItem = screen.getByLabelText("item-James Carmona");
  expect(displayedItem).toBeInTheDocument();

  const allDisplayedItems = screen.getAllByRole("listitem");
  expect(allDisplayedItems.length).toBe(1);
});

test("selects all items when 'Add All' button is clicked", () => {
  render(<App />);

  expect(screen.getByText("Gryffindor (0)")).toBeInTheDocument();

  const addAllButton = screen.getByRole("button", { name: "Add All" });
  userEvent.click(addAllButton);

  expect(screen.getByText("Gryffindor (10)")).toBeInTheDocument();
});
