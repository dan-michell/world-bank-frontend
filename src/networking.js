export default class Networking {
  async registerUser(email, username, password, passwordConformation) {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, passwordConformation }),
      });
      const json = await response.json();
      return json.response;
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(username, password) {
    try {
      const response = await fetch("http://localhost:8080/sessions", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const json = await response.json();
      return json;
    } catch (e) {
      console.log(e);
    }
  }

  async logoutUser() {
    try {
      const response = await fetch("http://localhost:8080/sessions", {
        method: "DELETE",
        credentials: "include",
      });
      const json = await response.json();
      return json.response;
    } catch (e) {
      console.log(e);
    }
  }

  async getUser() {
    try {
      const response = await fetch("http://localhost:8080/sessions", {
        credentials: "include",
      });
      const user = await response.json();
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
