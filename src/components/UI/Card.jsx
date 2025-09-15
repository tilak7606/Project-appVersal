// src/components/ui/Card.js
import React from 'react';

const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;