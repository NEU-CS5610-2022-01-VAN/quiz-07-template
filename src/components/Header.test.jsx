import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header with title and selected count", () => {
  render(<Header title="Gryffindor" countSelected={3} selectAll={() => {}} />);

  expect(screen.getByText("Gryffindor (3)")).toBeInTheDocument();
});
