export default class Networking {
  async registerUser(email, username, password, passwordConformation) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
          passwordConformation,
        }),
      });
      const json = await response.json();
      return json.response;
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(username, password) {
    try {
      console.log();
      const response = await fetch(`${process.env.REACT_APP_API_URL}/sessions`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        return false;
      }
      return true;
    } catch (e) {
      console.log(e);
    }
  }

  async logoutUser() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/sessions`, {
        method: "DELETE",
        credentials: "include",
      });
      const json = await response.json();
      return json.response;
    } catch (e) {
      console.log(e);
    }
  }

  async fetchUserSearchData(countryFormValues, indicatorFormValues, startYear, endYear) {
    try {
      const encodedCountryName = encodeURIComponent(countryFormValues[0].country);
      const encodedIndicator = encodeURIComponent(indicatorFormValues[0].indicator);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/search?country=${encodedCountryName}&indicator=${encodedIndicator}&startYear=${startYear}&endYear=${endYear}`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        return false;
      }
      const worldBankData = await response.json();
      return worldBankData.rows;
    } catch (e) {
      console.log(e);
    }
  }

  async fetchHistoryData() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/history`, {
        method: "GET",
        credentials: "include",
      });
      let historyResponse = await response.json();
      return historyResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/sessions`, {
        credentials: "include",
      });
      const user = await response.json();
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
