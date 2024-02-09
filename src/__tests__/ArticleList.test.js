import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const articles = [
  { title: "Article 1", date: "2024-02-09", preview: "Preview 1" },
  { title: "Article 2", date: "2024-02-10", preview: "Preview 2" },
];

test("renders an <article> element for each article", () => {
  render(<ArticleList articles={articles} />);
  const articleElements = screen.getAllByRole("article");
  expect(articleElements.length).toBe(articles.length);
});