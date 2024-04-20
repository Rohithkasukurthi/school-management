import React, { useState, useEffect } from 'react';
import { getAllSchools } from '../../api';
import SchoolCard from '../Admin/SchoolCard';

const SchoolList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await getAllSchools();
        console.log(response);
        setSchools(response);
      } catch (err) {
        console.error('Error fetching schools:', err);
        // Add error notification logic
      }
    };
    fetchSchools();
  }, []);

  return (
    <div>
      <h2>Schools</h2>
      {schools.map(school => <SchoolCard key={school._id} school={school} />)}
    </div>
  );
};

export default SchoolList;
