import React from 'react';
import './styles.less';

export function IconButton({ children, onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      {children}
    </button>
  );
}
