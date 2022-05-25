import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "/Users/milanpatel/Desktop/RulersLite_Week1/world-bank-frontend/src/App.js";

import Search from "./Search.js";

describe("SearchForm", () => {
  test("renders Form component", () => {
    render(<Search />);
  });

  test("Form contains input box", () => {
    render(<Search />);
    // Use findBy instead of getBy when asserting elements that are not currently in the HTML but
    // will be eventually.
    // Use query by if you are asserting a missing element.
    expect(screen.getByPlaceholderText("Country")).toBeInTheDocument();
  });

  test("Form contains remove button when add button is clicked", () => {
    render(<Search />);

    expect(screen.getByText("Add Country")).toBeInTheDocument();
    expect(screen.getByTestId("remove-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("remove-button"));
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  test("Form contains all initial buttons", () => {
    render(<Search />);

    expect(screen.getByText("Add Country")).toBeInTheDocument();
    expect(screen.getByText("Add Indicator")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    
  });
});
