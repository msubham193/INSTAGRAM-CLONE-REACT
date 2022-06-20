import { useState } from "react";
 import { motion } from "framer-motion"; /*<<<------Framer Motion library For Animation*/
import { FcLike, FcComments } from "react-icons/fc";
import { Link } from "react-router-dom";
import Comments from "../../data/comments";

const Post = (props) => {
  const { img, likes, code, index, caption } = props;

  const [like, setLike] = useState(Number(likes));

  return (
    ///Framer Motion library For Animation
    <motion.div
      animate={{ scale: 0.9 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1 }}
      className="md:w-80 w-65 border  drop-shadow-xl"
    >
      <Link to={`/post/${code}`} i={index}>
        {" "}
        <img src={img} alt="" className="  md:h-80   " />
      </Link>

      <div className=" grid gap-y-5 p-6 items-center justify-center ">
        <p className="post_description">{caption}</p>

        <div className=" flex justify-center ">
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
          <Link to={`/post/${code}`} i={index}>
            <button className="hover:animate-pulse p-2 border-2 border-gray-300 w-28 ml-2 flex items-center justify-center gap-x-2  hover:bg-red-400">
              <FcComments />
              <span>
                {typeof Comments[code] !== "undefined"
                  ? Comments[code].length
                  : 0}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
