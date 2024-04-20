import React, { useState, useEffect } from 'react';
import { postSchool } from '../../api';

const AddSchoolForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolFees, setSchoolFees] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      // Cancel the API call if the user navigates away from the page or closes the browser window
      // Add cancellation logic here
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!schoolName ||!schoolFees) {
      alert('Please enter valid school name and fees.');
      return;
    }
    if (isNaN(schoolFees)) {
      alert('Please enter a valid number for school fees.');
      return;
    }
    setIsLoading(true);
    try {
      await postSchool({ name: schoolName, fees: schoolFees });
      // Add success notification or redirection logic
    } catch (err) {
      console.error('Error adding school:', err);
      // Add error notification logic
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Add School</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <input
          type="text"
          placeholder="School Fees"
          value={schoolFees}
          onChange={(e) => setSchoolFees(e.target.value.replace(/\D/g, ''))}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading? 'Adding...' : 'Add School'}
        </button>
      </form>
    </div>
  );
};

export default AddSchoolForm;
