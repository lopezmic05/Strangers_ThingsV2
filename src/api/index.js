export const Cohort = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${Cohort}`;

export const registerUser = async(username, password) => {
  try {
    console.log(`${BASE_URL}users/register`);
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json()
    const token = result.token
    localStorage.setItem("token", token)
    return result
    
  } catch (error) {
    throw error
  }
}

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching posts!", err);
  }
};
