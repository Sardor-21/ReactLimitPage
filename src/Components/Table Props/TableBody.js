import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MyButton from "../UI/MyButton/MyButton";
const TableBody = ({ post, removePost }) => {
  return (
    <TransitionGroup>
      {post?.map((post, i) => (
        <CSSTransition key={post.id} timeout={500} classNames="item">
          <div className="d-flex justify-content-between">
            <div className="w-75">
              <div className="d-flex">
                <p className="fw-bold me-2">{i + 1}</p>
                <p className="fw-bold text-capitalize">{post.title}</p>
              </div>
              <p className="fw-light text-capitalize">{post.body}</p>
            </div>
            <div className="text-end d-flex align-items-center">
              <MyButton
                className="btn btn-danger"
                onClick={() => removePost(post)}
              >
                {" "}
                Delete{" "}
              </MyButton>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TableBody;
