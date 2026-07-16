import React from 'react';

const User = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

export default User;
