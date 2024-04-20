import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import ParentPage from './pages/ParentPage';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <div>
      <Router>
     <Routes  >
      <Route path='/' element={<Navbar />}>
       <Route path="/admin" element={<AdminPage/>} />
         <Route path="/parents" element={<ParentPage/>} />
         </Route>
       </Routes>
       </Router>
 

      </div>

  );
};

export default App;

