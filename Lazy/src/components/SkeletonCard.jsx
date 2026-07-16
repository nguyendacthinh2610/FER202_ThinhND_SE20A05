import React from 'react';

const SkeletonCard = ({ type = 'user' }) => {
  return (
    <div className={`${type}-card skeleton-card skeleton-${type}`}>
      {type === 'user' ? (
        <>
          <div className="skeleton-line name shimmer"></div>
          <div className="skeleton-line email shimmer"></div>
        </>
      ) : (
        <>
          <div className="skeleton-line title shimmer"></div>
          <div className="skeleton-line text shimmer"></div>
          <div className="skeleton-line text shimmer"></div>
          <div className="skeleton-line text-short shimmer"></div>
        </>
      )}
    </div>
  );
};

export default SkeletonCard;
