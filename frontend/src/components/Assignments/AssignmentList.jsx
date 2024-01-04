import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AssignmentContext from '../../context/AssignmentContext';
import './AssignmentList.css'

const AssignmentList = () => {
  const { assignments, isLoading, error } = useContext(AssignmentContext);

  if (isLoading) {
    return <p>Loading assignments...</p>;
  }

  if (error) {
    return <p>Error fetching assignments: {error.message}</p>;
  }

  return (
    <div>
      {/* Grouping assignments by status */}
      <h2>Currently Working On</h2>
      <ul>
        {assignments.filter((assignment) => assignment.status === 'Working').map((assignment) => (
          <li key={assignment.id}>
            {assignment.title}
            <Link to={`/assignments/${assignment.id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>

      <h2>Submitted</h2>
      <ul>
        {assignments.filter((assignment) => assignment.status === 'Submitted').map((assignment) => (
          <li key={assignment.id}>
            {assignment.title}
            <Link to={`/assignments/${assignment.id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>

      <h2>Rejected</h2>
      <ul>
        {assignments.filter((assignment) => assignment.status === 'Rejected').map((assignment) => (
          <li key={assignment.id}>
            {assignment.title}
            <Link to={`/assignments/${assignment.id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>

      <h2>Completed</h2>
      <ul>
        {assignments.filter((assignment) => assignment.status === 'Completed').map((assignment) => (
          <li key={assignment.id}>
            {assignment.title}
            <Link to={`/assignments/${assignment.id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentList;