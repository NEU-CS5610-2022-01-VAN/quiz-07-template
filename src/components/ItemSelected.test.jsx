import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ItemsSelected from "./ItemsSelected";

test("renders selected items", () => {
  const selectedItems = [
    { id: 1, name: "John Doe", subTitle: "Engineer", imageUrl: "" },
    { id: 2, name: "Jane Doe", subTitle: "Designer", imageUrl: "" },
    { id: 3, name: "Bob Smith", subTitle: "Manager", imageUrl: "" },
    { id: 4, name: "Mary Smith", subTitle: "Engineer", imageUrl: "" },
  ];

  render(<ItemsSelected selectedItems={selectedItems} deleteItem={() => {}} />);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
