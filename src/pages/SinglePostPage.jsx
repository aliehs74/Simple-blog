import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePostPage() {
  const allData = JSON.parse(localStorage.getItem("allData"));
  const postIndex = useParams().slug - 1;
  const post = allData.posts[postIndex];

  let comments = [];
  allData.comments.forEach((comment) => {
    if (postIndex + 1 === comment.postId) {
      comments.push(comment);
      return comments;
    }
  });

  const commentsElement = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <hr />
        <div className="subHeader">
          <sub>{comment.name.split([], 15)} (</sub>
          <sub>{comment.email})</sub>
        </div>
        <p>{comment.body}</p>
        <br />
      </li>
    );
  });

  return (
    <div className="SinglePostPage">
      <h1>{post.title}</h1>

      <sub className="subHeader">
        <img src={post.thumbnailUrl} alt="" />
        author: {post.author.split([], 15)}
      </sub>

      <div className="bodyContent">
        <br />
        <br />

        <p>
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
        </p>
        <img src={post.imageURL} alt="" />
        <p>
          {post.body}
          {post.body}
          {post.body}
          {post.body}
          {post.body}
        </p>

        <br />
        <br />

        <ul className="SinglePostComment">
          <h1>Comments</h1>
          {commentsElement}
        </ul>
      </div>
    </div>
  );
}
