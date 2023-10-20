import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemPicker from "./ItemPicker";

test("renders items and selects one", () => {
  const items = [
    { id: 1, name: "John Doe", subTitle: "Engineer", imageUrl: "" },
    { id: 2, name: "Jane Doe", subTitle: "Designer", imageUrl: "" },
    { id: 3, name: "Bob Smith", subTitle: "Manager", imageUrl: "" },
    { id: 4, name: "Mary Smith", subTitle: "Engineer", imageUrl: "" },
  ];

  render(
    <ItemPicker items={items} selectItem={() => {}} setSearchText={() => {}} />
  );

  expect(screen.getByText("John Doe")).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(
    "Search by name or department"
  );
  fireEvent.change(inputElement, { target: { value: "John" } });
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
