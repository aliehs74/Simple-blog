import React, { useLayoutEffect, useState } from "react";
import GetData from "../asset/fetching/GetData";
import Card from "../components/Card";

export default function BlogPage() {
  // //method1  forceUpdate should execute in this Component(BlogPage.jsx) because allData equals null in first render.

  let [allData, setAllData] = useState(null);
  useLayoutEffect(() => {
    
    GetData().then((data) => {
      setAllData(data);
    });
  }, [allData]);

  var cards;
  if (allData !== null) {
    cards = allData.posts.map((post) => {
      return <Card post={post} key={post.id} />;
    });

    return (
      <div className="main">
        <header>
          <h1> All Articles In Blog</h1>
        </header>
        <div className="band">{cards}</div>
      </div>
    );
  } else {
    <div>
      <h1>Loading...</h1>
    </div>;
  }
}
