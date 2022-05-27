import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "./LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

describe("Register Form", () => {
  const registerForm = (
    <Router>
      <RegisterForm />
    </Router>
  );
  const noUserFoundAlert = screen.findByText(
    "Registration unsuccessful, check passwords match and email is valid."
  );

  //Tests

  test("Should show register form", () => {
    render(registerForm);
  });

  test("Form contains all required buttons", () => {
    render(registerForm);
    expect(screen.getByTestId("register-button")).toBeInTheDocument();
    expect(screen.getByTestId("has-account-button")).toBeInTheDocument();
  });

  test("When user clicks the register button without input, 'Registration unsuccessful, check passwords match and email is valid.", async () => {
    render(registerForm);
    expect(screen.getByTestId("register-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("register-button"));
    await noUserFoundAlert;
  });
});
