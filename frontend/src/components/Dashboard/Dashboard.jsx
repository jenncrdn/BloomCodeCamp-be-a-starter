import React, { useEffect } from 'react';
// import AssignmentList from '../Assignments/AssignmentList';
// import AssignmentContext from '../../context/AssignmentContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
//   const navigate = useNavigate();
//   const { fetchAssignments, assignments, isLoading, error } = useContext(AssignmentContext);
//
//   useEffect(() => {
//     // Fetch assignments on component mount
//     fetchAssignments();
//   }, [fetchAssignments]);

//   if (isLoading) {
//     return <p>Loading assignments...</p>;
//   }
//
//   if (error) {
//     return <p>Error fetching assignments: {error.message}</p>;
//   }

  return (
    <div>
      <h1>Assignment Dashboard</h1>
      <h2>Welcome back, Juliana!</h2>
      <p>Select an assignment to keep working, review, or fix and submit again.</p>
{/*       <AssignmentList /> */}
      <section className="key-assignments">
        <div className="feature-assignment">
          <h2>Currently Working On</h2>
          <ul>
            <li>Project Firefly</li>
            <li>Project Blue Sky</li>
          </ul>
        </div>
        <div className="feature-assignment">
          <h2>Submitted</h2>
          <ul>
            <li>Project Catalyst </li>
          </ul>
        </div>
        <div className="feature-assignment">
          <h2>Rejected</h2>
          <ul>
            <li>Project Quantum Leap</li>
          </ul>
        </div>
        <div className="feature-assignment">
          <h2>Completed</h2>
          <ul>
            <li>Project Mosaic</li>
            <li>Project Pathfinder</li>
            <li>Project Nightingale</li>
          </ul>
        </div>
      </section>
      <button type="submit">Submit a New Assignment</button>
    </div>
    );
};

export default Dashboard;