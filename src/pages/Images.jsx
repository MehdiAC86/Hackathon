import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Style/images.css";

function Images() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search?query="christmas"&page=1&per_page=40`,
      {
        headers: {
          Authorization:
            "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setPictures(data.photos))
      .catch((err) => {
        console.error(err);
      });
  }, [pictures]);

  return (
    <div className="images">
      {pictures.map((pic) => (
        <NavLink to={`/images/${pic.id}`} className="collection" key={pic.id}>
          <img src={pic.src.large} alt={pic.alt} className="pictures" />
        </NavLink>
      ))}
    </div>
  );
}

export default Images;
