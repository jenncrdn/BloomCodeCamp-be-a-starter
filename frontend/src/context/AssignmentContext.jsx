import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AssignmentContext = createContext();

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const AssignmentContextProvider = ({ children }) => {
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAssignments = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get('/api/assignments');
      setAssignments(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <AssignmentContext.Provider
      value={{ assignments, isLoading, error, fetchAssignments }}
    >
      {children}
    </AssignmentContext.Provider>
  );
};

export default AssignmentContextProvider;