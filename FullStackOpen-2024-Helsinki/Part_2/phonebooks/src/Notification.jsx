import React from 'react';

const Notification = ({ message, type }) => {
  let notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  if (type === 'error') {
    notificationStyle = {
      ...notificationStyle,
      color: 'red',
    };
  }

  if (message === null) {
    return null;
  }

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
