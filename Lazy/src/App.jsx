import React, { useState, useEffect, Suspense } from 'react';
import { fetchAllUsers, fetchAllPosts } from './api/api';
import SkeletonCard from './components/SkeletonCard';

// Lazy loaded components
const User = React.lazy(() => import('./components/User'));
const Post = React.lazy(() => import('./components/Post'));

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  const loadData = async () => {
    setLoadingUsers(true);
    setLoadingPosts(true);
    setError(null);
    try {
      const usersData = await fetchAllUsers();
      setUsers(usersData);
      setLoadingUsers(false);

      const postsData = await fetchAllPosts();
      setPosts(postsData);
      setLoadingPosts(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data from JSONPlaceholder API. Please verify your connection.');
      setLoadingUsers(false);
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo" onClick={() => setActiveTab('home')}>Logo</div>
          <nav className="nav-links">
            <button
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button
              className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
          </nav>
        </div>
      </header>

      {activeTab === 'home' ? (
        <div className="banner users-banner">
          <div className="banner-content">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="banner-icon" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm316.5 27.3c28.3 12.3 49.3 37 59.5 67.7 18.2-19.4 42.2-31 68-31 53 0 96 43 96 96v32c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-32c0-53 43-96 96-96 25.8 0 49.8 11.6 68 31 10.2-30.7 31.2-55.4 59.5-67.7C201.6 224.6 192 201.4 192 176c0-44.2 35.8-80 80-80s80 35.8 80 80c0 25.4-9.6 48.6-21.5 67.3zM272 208c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z"></path>
            </svg>
            <h1 className="banner-title">Users</h1>
          </div>
        </div>
      ) : (
        <div className="banner posts-banner">
          <div className="banner-content">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="banner-icon" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm316.5 27.3c28.3 12.3 49.3 37 59.5 67.7 18.2-19.4 42.2-31 68-31 53 0 96 43 96 96v32c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-32c0-53 43-96 96-96 25.8 0 49.8 11.6 68 31 10.2-30.7 31.2-55.4 59.5-67.7C201.6 224.6 192 201.4 192 176c0-44.2 35.8-80 80-80s80 35.8 80 80c0 25.4-9.6 48.6-21.5 67.3zM272 208c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z"></path>
            </svg>
            <h1 className="banner-title">Posts</h1>
          </div>
        </div>
      )}

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      <main className="main-content">
        {activeTab === 'home' && (
          <div className="users-view">
            {loadingUsers ? (
              <div className="users-list">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonCard key={i} type="user" />
                ))}
              </div>
            ) : (
              <Suspense fallback={
                <div className="users-list">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SkeletonCard key={i} type="user" />
                  ))}
                </div>
              }>
                <div className="users-list">
                  {users.map(user => (
                    <User key={user.id} user={user} />
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="posts-view">
            {loadingPosts ? (
              <div className="posts-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} type="post" />
                ))}
              </div>
            ) : (
              <Suspense fallback={
                <div className="posts-grid">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} type="post" />
                  ))}
                </div>
              }>
                <div className="posts-grid">
                  {posts.map(post => (
                    <Post key={post.id} post={post} />
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
