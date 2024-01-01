import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

export default async function GetData() {
  const FetchPosts = await axios.get("/posts?_limit=20")
  const FetchComments = await axios.get("/comments?_limit=100");
  const FetchPhotos = await axios.get("/photos?_limit=20")

  let posts = null;
  if (FetchPosts.data !== null) {
    posts = FetchPosts.data.map((post, index) => {
      const photo = FetchPhotos.data[index];
      const author = FetchComments.data[index + 50].name;

      return {
        body: post.body,
        id: post.id,
        title: post.title,
        thumbnailUrl: photo.thumbnailUrl,
        imageURL: photo.url,
        author
      };
    });
  }

  const allData = { posts, comments: FetchComments.data };
console.log(allData);
  //for method1-2(BlogPage.jsx) & method2(App.jsx)
  localStorage.setItem("allData", JSON.stringify(allData));

  //for method 1-1 (BlogPage.jsx)
  return allData
}
