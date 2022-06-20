import React from "react";

import Logo from "../../image/logo.png";
import Post from "../../components/PostCard/Post";
import data from "../../data/posts";

const Home = () => {
  return (
    <div className="h-full px-20 ">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-80" />
      </div>

      <div className=" justify-items-center grid grid-flow-row grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((post) => (
          <Post
            img={post.display_src}
            likes={post.likes}
            key={post.id}
            code={post.code}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
