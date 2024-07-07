import React, { createContext, useState, useContext } from 'react';
import data from '../Assert/data'; // Import your data

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState(data);

  // Example function to update projects
  const updateProjects = (updatedProjects) => {
    setProjects(updatedProjects);
  };

  return (
    <DataContext.Provider value={{ projects, updateProjects }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
