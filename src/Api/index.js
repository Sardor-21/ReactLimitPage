import axios from "axios";

class GETServerPosts {
  static async getAllPost(limit = 10, page) {
    const resposnse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return resposnse;
  }
}

export default GETServerPosts;
