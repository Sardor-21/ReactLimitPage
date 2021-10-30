/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";
import FormTable from "./FormTable";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { usePosts } from "../../hooks/useHooks";
import GETServerPosts from "../../Api/index";
import "./Table.css";
import useFetching from "../../hooks/useFetching";
import { getPageArray, getTotalPage } from "../../utils/getTotalPage";
import MyButton from "../UI/MyButton/MyButton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Table = () => {
  const [posts, setPosts] = useState([
    // { id: 1, title: "Angular", body: "Full-Stack" },
    // { id: 2, title: "Goo", body: "Cyber" },
    // { id: 3, title: "Phyton", body: "Backend" },
    // { id: 4, title: "Java", body: "Backend" },
    // { id: 5, title: "Javascript", body: "Full-Stack" },
  ]);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isloading, err] = useFetching(async () => {
    const response = await GETServerPosts.getAllPost(limit, page);
    console.log(response.headers["x-total-count"]);
    const totalPageCount = response.headers["x-total-count"];
    setTotalPage(getTotalPage(totalPageCount, limit));
    setPosts(response.data);
  });
  const pageArray = getPageArray(totalPage);
  useEffect(() => {
    fetchPosts();
  }, [page]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((v) => v.id !== post.id));
  };
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const sortedAndSearchPosts = usePosts(posts, select, search);
  const sortSelect = (sort) => {
    setSelect(sort);
  };
  const changePage = (i) => {
    setPage(i);
  };
  return (
    <div className="w-75 mx-auto">
      <FormTable createPost={createPost} />
      <div className="d-flex justify-content-center">
        <MyInput
          className="form-control me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={select}
          onChange={sortSelect}
          defaultValue="Sorted by"
          options={[
            { value: "title", name: "Title" },
            { value: "body", name: "Body" },
          ]}
        />
      </div>
      <div>
        <TableHead />
        <div>
          {err && <p>Error</p>}
          {sortedAndSearchPosts.length <= 0 && <p>Not Found</p>}
        </div>
        {isloading ? (
          <div>
            <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
              <Skeleton
                style={{
                  height: "27px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Skeleton count={5} />
            </SkeletonTheme>
          </div>
        ) : (
          <TableBody removePost={removePost} post={sortedAndSearchPosts} />
        )}
      </div>
      {pageArray.map((item) => (
        <MyButton
          key={item}
          className={`btn mx-1  ${
            page === item ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => changePage(item)}
        >
          {item}
        </MyButton>
      ))}
    </div>
  );
};

export default Table;
