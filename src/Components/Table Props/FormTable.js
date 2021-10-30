import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const FormTable = ({ createPost }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const addPost = (event) => {
    event.preventDefault();
    let id = Date.now();
    const newPost = {
      ...post,
      id: id,
    };
    createPost(newPost);
    setPost({
      title: "",
      body: "",
    });
  };
  return (
    <form className="form-group mb-3" onSubmit={(event) => addPost(event)}>
      <MyInput
        value={post.title}
        className="form-control mb-3"
        placeholder="Programming"
        required
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        value={post.body}
        className="form-control mb-3"
        placeholder="Stack"
        required
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton className="btn btn-primary w-100">Add post</MyButton>
    </form>
  );
};

export default FormTable;
