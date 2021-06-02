import React from 'react';

function EmployeeCard({ firstName, lastName, location, phone, picture }) {
  return (
    <tr>
      <th scope="row">
        <img src={picture} alt="profile" />
      </th>
      <td>
        {firstName} {lastName}
      </td>
      <td>{location}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default EmployeeCard;
