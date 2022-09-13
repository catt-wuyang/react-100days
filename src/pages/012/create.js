import React, { useState } from "react";
import Filter from "bad-words";

const filter = new Filter();

function CreatPost({ placeholder, onSubmit }) {
  const [content, setContent] = useState("");
  const [valid, setValid] = useState(false);

  function changeHandle(e) {
    const newContent = filter.clean(e.target.value);
    setContent(newContent);
    setValid(newContent.length < 140);
  }

  function submitHandle() {
    if (!content) {
      return false;
    }
    const newPost = {
      id: "b9968a11-508c-4451-8a7e-cf3f317024cb",
      date: Date.now(),
      content: content,
      location: null,
      image: null,
    };
    onSubmit(newPost);

    setContent("");
    setValid(false);
  }

  return (
    <div className="post-create-wrap">
      <div className="post-create-write">
        <img
          src="https://i.postimg.cc/qBmzJWDD/270-E1-Mi-I-400x400.jpg"
          alt="avatar"
          className="user-profile-avatar"
        />
        <textarea
          type="input"
          value={content}
          onChange={changeHandle}
          placeholder={placeholder ? placeholder : "有什么新鲜事？"}
        ></textarea>
      </div>
      <button className="post-create-button" onClick={submitHandle}>
        发推
      </button>
    </div>
  );
}

export default CreatPost;
