import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "./LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

describe("Login Form", () => {
  const loginForm = (
    <Router>
      <LoginForm />
    </Router>
  );
  const registerForm = (
    <Router>
      <RegisterForm />
    </Router>
  );
  const noUserFoundAlert = screen.findByText(
    "No user found, try again or register."
  );

  //Tests

  test("Should show login form", () => {
    render(loginForm);
  });

  test("Form contains all required buttons", () => {
    render(loginForm);
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    expect(
      screen.getByTestId("dont-have-an-account-button")
    ).toBeInTheDocument();
  });

  test("When user clicks the login button without input, 'No user found' should be displayed", async () => {
    render(loginForm);
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("login-button"));
    await noUserFoundAlert;
  });

  test("When 'Don't have an account?' is clicked, the user is redirected to the register page", async () => {
    render(loginForm);
    expect(
      screen.getByTestId("dont-have-an-account-button")
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("dont-have-an-account-button"));
    render(registerForm);
    expect(screen.getByTestId("create-account-button")).toBeInTheDocument();
  });

  test("When a non-existent username and password is entered into the form, 'No user found' should be displayed", async () => {
    render(loginForm);
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "aaa" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "bbb" },
    });
    fireEvent.click(screen.getByTestId("login-button"));

    await noUserFoundAlert;
  });
});
