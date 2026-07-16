import React from 'react';

const Post = ({ post }) => {
  if (!post) return null;

  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default Post;
