import React, { useEffect } from 'react';
import AssignmentList from '../Assignments/AssignmentList';
import AssignmentContext from '../../context/AssignmentContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();
  const { fetchAssignments, assignments, isLoading, error } = useContext(AssignmentContext);

  useEffect(() => {
    // Fetch assignments on component mount
    fetchAssignments();
  }, [fetchAssignments]);

  if (isLoading) {
    return <p>Loading assignments...</p>;
  }

  if (error) {
    return <p>Error fetching assignments: {error.message}</p>;
  }

  return (
    <div>
      <h1>Assignment Dashboard</h1>
      <AssignmentList />
      <button type="submit">Submit a New Assignment</button>
    </div>
  );
};

export default Dashboard;