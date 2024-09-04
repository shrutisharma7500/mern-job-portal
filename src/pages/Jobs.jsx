import React from 'react';
import Card from '../components/Card.jsx'; // Ensure the path is correct

const Jobs = ({ result = [] }) => {
  return (
    <div>
      {Array.isArray(result) && result.length > 0 ? (
        result.map((job, index) => (
          <Card key={index} data={job} />
        ))
      ) : (
        <p>No job results found.</p>
      )}
    </div>
  );
};

export default Jobs;
