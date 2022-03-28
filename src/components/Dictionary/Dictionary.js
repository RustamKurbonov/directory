import React, { useState, useEffect } from "react";
import { InputFilter, Post, Pagination } from "../index";
import siteMap from "../../siteMap/config.json";
import * as axios from "axios";

export const Dictionary = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count] = useState(4);

  const filterPage = posts.filter((item) =>
    item.title.toLowerCase().includes(inputValue)
  );

  const lastIndex = currentPage * count;
  const firstIndex = lastIndex - count;
  const currentPosts = filterPage.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (localStorage.length === 0) {
      window.location.href = siteMap.login.path;
    }

    const handlePostsGet = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/RustamKurbonov/jstest/db"
      );
      setPosts(res.data.posts);
    };
    handlePostsGet();
  }, []);

  const paginationFunction = (number) => setCurrentPage(number);

  return (
    <div className="post-container">
      <div className="post">
        <div className="post__title-main title">{siteMap.dictionary.name}</div>
        <InputFilter
          onInputChenge={(e) => setInputValue(e.target.value.toLowerCase())}
        />
        {currentPosts.map((post, index) => (
          <Post key={index} title={post.title} text={post.description} />
        ))}
      </div>
      <Pagination
        count={count}
        total={filterPage.length}
        paginationFunction={paginationFunction}
      />
    </div>
  );
};
