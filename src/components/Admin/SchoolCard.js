import React, { useState } from 'react';
import { deleteSchool } from '../../api';
import Popup from 'reactjs-popup';
import EditSchoolForm from './EditSchoolForm';
import classes from "./SchoolCard.css";

const SchoolCard = ({ school }) => {
  const [popup, setPop] = useState(false); // Initialize popup state

  const handleDelete = async (schoolName) => {
    try {
      await deleteSchool(schoolName);
      console.log("School deleted successfully");
      // Add success notification or redirection logic
    } catch (err) {
      console.error('Error deleting school:', err);
      // Add error notification logic
    }
  };

  return (
    <div>
      <h3>{school.name}</h3>
      <p>Fees: ${school.fees}</p>
      <button onClick={() => handleDelete(school.name)}>Delete</button>
      <button onClick={() => setPop(true)}>Edit</button>

      {/* Popup for editing */}
      <Popup open={popup} onClose={() => setPop(false)} modal nested>
        {(close) => (
          <div>
            <EditSchoolForm school={school} onClose={close} />
            <button onClick={close}>Close</button>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default SchoolCard;
