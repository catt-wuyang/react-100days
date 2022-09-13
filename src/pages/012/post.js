import React from "react";
import PropTypes from "prop-types";

function Post({ post }) {
  if (!post) return null;

  return (
    <div className="post-item">
      <div className="post-content">
        <img
          src="https://i.postimg.cc/qBmzJWDD/270-E1-Mi-I-400x400.jpg"
          alt="avatar"
          className="user-profile-avatar"
        />
        <div className="post-content-flex">
          <div className="post-info-display">
            <div>
              <span className="user-profile-name">無恙</span>
              <span className="post-commit-date">{post.date}</span>
            </div>
            <div>
              <i className="iconfont ic-more"></i>
            </div>
          </div>
          <div className="post-commit-content">{post.content}</div>
          <div className="post-action-button">
            <i className="iconfont ic-comment">
              <em>评论</em>
            </i>
            <i className="iconfont ic-like">
              <em>点赞</em>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string,
    user: PropTypes.object,
    date: PropTypes.number,
    content: PropTypes.string,
    comments: PropTypes.array,
    image: PropTypes.string,
  }),
};

export default Post;
