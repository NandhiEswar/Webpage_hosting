import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Assert/data'; // Adjust the path if necessary

const Detail = () => {
  const { id } = useParams();
  const item = data[id];

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.heading}</h1>
      <h2>{item.subheading}</h2>
      <img src={item.imgSrc} alt={item.heading} />
      <p>{item.description}</p>
      <p><strong>Tools:</strong> {item.tools}</p>
      {item.image1 && <img src={item.image1} alt={`${item.heading} additional`} />}
      {item.image2 && <img src={item.image2} alt={`${item.heading} additional`} />}
    </div>
  );
};

export default Detail;
