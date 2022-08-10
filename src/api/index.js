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

export const loginUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}



export const getUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
    })
  } catch (error) {
    
  }
}

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Uh oh, trouble fetching posts!", error);
  }
};
