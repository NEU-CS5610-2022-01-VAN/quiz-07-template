import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header with title and selected count", () => {
  render(<Header title="Northeastern University" countSelected={3} selectAll={() => {}} />);

  expect(screen.getByText("Northeastern University (3)")).toBeInTheDocument();
});
