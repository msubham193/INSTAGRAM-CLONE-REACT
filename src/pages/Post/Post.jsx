import React, { useState } from "react";
import Logo from "../../image/logo.png";
import { FcLike, FcComments } from "react-icons/fc";
import Comment from "../../components/Comment";
import { useParams } from "react-router-dom";
import { MdSend } from "react-icons/md";
import comments from "../../data/comments";
import posts from "../../data/posts";
import { motion } from "framer-motion";
const Post = () => {
  const params = useParams();
  const [comment, setComment] = useState(
    typeof comments[params.id] === "undefined" ? [] : comments[params.id]
  );

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  ////Handling For Submitting Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) alert("Please fill all fields");

    setComment((prev) => [...prev, { text, user: name }]);
  };

  //// Getting Posts From Code::::
  let likes = 0;
  let image = "";
  let caption = "";

  for (let index = 0; index < posts.length; index++) {
    if (posts[index].code === params.id) {
      likes = posts[index].likes;
      image = posts[index].display_src;
      caption = posts[index].caption;
    }
  }
  //// Getting Posts From Code::::

  const [like, setLike] = useState(Number(likes));

  return (
    <div className="w-full h-screen flex flex-col items-center px-8 ">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="md:w-80 w-52" />
      </div>
      <div className=" tablet:w-[100%] w-[80%] md:flex shadow-lg border-gray-200 border-2 p-3 pb-40 b  ">
        <div className="md:w-[70%] w-full ">
          {" "}
          <img src={image} alt="" className=" md:h-[60%]    w-full" />
          <div className=" grid gap-y-5 p-6 justify-start items-start w-[70%] ">
            <p className="w">{caption}</p>

            <div className=" flex gap-x-4 ">
              <motion.button
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.1 }}
                onClick={() => setLike(like + 1)}
                className="p-2 border-2 border-gray-300 w-28 flex items-center justify-center gap-x-2 hover:bg-red-400 "
              >
                <FcLike className="text-blue-400" />
                <span>{like}</span>
              </motion.button>
              <button className="p-2 border-2 border-gray-300 w-28 ml-2 flex items-center justify-center gap-x-2  hover:bg-red-400">
                <FcComments />
                <span>
                  {typeof comments[params.id] !== "undefined"
                    ? comments[params.id].length
                    : 0}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/2 grid gap-y-2 ">
          <div className="w-full flex gap-y-3  flex-col ">
            {comment.map((data, index) => (
              <Comment text={data.text} user={data.user} key={index} />
            ))}
          </div>

          <form
            className="flex flex-col gap-y-4 "
            onSubmit={handleSubmit}
            action="#"
          >
            <input
              type="text"
              name="author"
              id="author"
              className="w-full border-b-2 border-slate-300 h-9"
              placeholder="Author"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="comment"
              className="w-full  border-b-2 border-slate-300 h-9"
              placeholder="Comment"
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onSubmit={handleSubmit}
              className="text-sky-400 text-2xl bg-slate-100 p-2 rounded-full  flex items-center justify-center"
            >
              <MdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
