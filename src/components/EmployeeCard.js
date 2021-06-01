import React from 'react';

function EmployeeCard({ name, location, phone, picture }) {
  return (
    <div>
      <li className="card border border-dark">
        {name}, {location} || {phone} ||
        <span>
          <img src={picture} />
        </span>
      </li>
    </div>
  );
}

export default EmployeeCard;
