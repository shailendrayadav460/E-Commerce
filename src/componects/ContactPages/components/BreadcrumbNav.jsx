import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function BreadcrumbNav() {
  return (
    <div className="breadcrumb-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              <FaHome className="breadcrumb-icon" /> Home
            </Link>
          </li>
          <li className="breadcrumb-separator">›</li>
          <li className="breadcrumb-item">Shop</li>
          <li className="breadcrumb-separator">›</li>
          <li className="breadcrumb-item active">Cart</li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadcrumbNav;
