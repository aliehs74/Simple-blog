import React from "react";
import { Link } from "react-router-dom";

export default function Card({ post }) {
  const item = `item-${post.id}`;
  const link = `/BlogPage/SinglePostPage/${post.id}`;
  const imageURL = `url(${post.imageURL})`;
  const title = post.title;
  const author = post.author.split([], 15); //make shorter name

  return (
    <div className={item}>
      <Link to={link} className="card">
        <div className="thumb" style={{ backgroundImage: imageURL }}></div>
        <article>
          <h1>{title}</h1>
          <span>{author}</span>
        </article>
      </Link>
    </div>
  );
}
