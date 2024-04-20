import React from 'react';
import AddSchoolForm from '../components/Admin/AddSchoolForm';
import EditSchoolForm from '../components/Admin/EditSchoolForm';
import SchoolCard from '../components/Admin/SchoolCard';
import SchoolList from "../components/Parent/SchoolList"

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <AddSchoolForm />
      <EditSchoolForm/>
   
      <SchoolList/>

      {/* Implement list of schools using SchoolCard component */}
    </div>
  );
};

export default AdminPage;
