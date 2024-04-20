import React, { useState } from 'react';
import { putSchool } from '../../api';

const EditSchoolForm = ({ school, onClose }) => {
  const [schoolName, setSchoolName] = useState(school?.name || '');
  const [schoolFees, setSchoolFees] = useState(school?.fees?.toString() || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putSchool(school?.id, { name: schoolName, fees: parseFloat(schoolFees) });
      // Add success notification or redirection logic
      onClose(); // Close the popup after successful submission
    } catch (err) {
      console.error('Error editing school:', err);
      // Add error notification logic
    }
  };

  return (
    <div>
      <h2>Edit School</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="School Name"
          value={schoolName || ''}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <input
          type="number"
          placeholder="School Fees"
          value={schoolFees || ''}
          onChange={(e) => setSchoolFees(e.target.value)}
        />
        <button type="submit">Edit School</button>
      </form>
    </div>
  );
};

export default EditSchoolForm;
