import React from "react";

const Comment = (props) => {
  return (
    <div className="gap-x-3 ">
      <span className="text-blue-900 mr-2">{props.user}</span>
      {props.text}
    </div>
  );
};

export default Comment;
