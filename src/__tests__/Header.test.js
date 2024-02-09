import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  render(<Header blogName="My Blog" />);
  const headerElement = screen.getByRole("banner", { name: /my blog/i });
  expect(headerElement).toBeInTheDocument();
});