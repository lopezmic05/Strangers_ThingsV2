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

export const loginUser = async (username, password) => {
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
    console.log(response, "response from loginUser")
    const result = await response.json()
    const token = result.data.token
    return token
  } catch (error) {
    throw error
  }
}



export const getUserInfo = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
    })
    const result = response.json()
    const data = result.data
    return data
  } catch (error) {
    
  }
}

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error("Uh oh, trouble fetching posts!", error);
  }
};


export const createPosts = async (title, description, price, location) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Auntorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location
        }
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export const editPosts = async  (title, description, price, location, willDeliver, token, post_id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${post_id}`, {
      method : 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver
        }
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export const deletePosts = async (token, post_id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${post_id}`, {
      method : 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    })
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export const createMessage = async ( token, post_id, content) => {
  try {
    const response = await fetch( `${BASE_URL}/posts/${post_id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body : JSON.stringify({
        message: {
          content : content
        }
      })
    })
    const result = await response.json()
    return result
  } catch (error) {
    
  }
}