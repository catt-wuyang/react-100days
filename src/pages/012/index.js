import "./style.css";
import React, { useEffect, useState } from "react";
// import parseLinkHeader from "parse-link-header";
// import orderBy from "lodash/orderBy";
// import * as API from "./../common/http";
import { DB_POST } from "./db";
import CreatPost from "./create";
import Post from "./post";

function Twitter() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(DB_POST);

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    console.log("fetch");
    // const GET_POSTS_API = `http://localhost:3500/posts?_page=1&_sort=date&_order=DESC`;
    //   API.fetchPosts(GET_POSTS_API)
    //     .then((res) => {
    //       return res.json().then((posts) => {
    //         const links = parseLinkHeader(res.headers.get("link"));
    //         this.setState({
    //           posts: orderBy(this.state.posts.concat(posts)),
    //         });
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     });
  }

  function submitPostHandle(content) {
    console.log("submit");
    console.log("this is submit post handle");
    console.log(content);
    if (content) {
      // return API.createPost(content)
      //   .then((res) => res.json())
      //   .then((newPost) => {
      //     console.log(newPost);
      //   })
      //   .catch((err) => {
      //     this.setState({
      //       error: err,
      //     });
      //   });
    }
  }

  return (
    <div className="twitter-wrapper">
      <div className="post-colum-display">
        <CreatPost onSubmit={submitPostHandle} />

        {posts && posts.length ? (
          <div className="post-flow-wrap">
            {posts.map((post, index) => {
              return <Post key={`post_${index}`} post={post} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Twitter;
