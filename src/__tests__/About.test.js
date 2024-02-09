import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders an <aside> element with the about text", () => {
  render(<About aboutText="About text" />);
  const asideElement = screen.getByRole("complementary", { name: /about/i });
  expect(asideElement).toBeInTheDocument();
});