import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-white">Details Page for Playlist {id}</h2>
      {/* Render the playlist details */}
    </div>
  );
};

export default DetailsPage;
