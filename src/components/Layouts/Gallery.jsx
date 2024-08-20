import { Fragment, useEffect, useState } from "react";
import { getSingleDestination } from "../../api/api";
import ImageGallery from "../Elements/ImageGallery/ImageGallery";

const Gallery = ({ id }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getSingleDestination(id, (item) => {
      setGallery(item);
    });
  }, [id]);

  return (
    <Fragment>
      <div className="container mt-16 mb-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl poppins-bold">Our Gallery</h1>
          <h3 className="text-base text-secondary poppins-medium">View All</h3>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-3">
          {gallery.map((item) => (
            <ImageGallery
              key={item.id}
              image={item.image}
              title={item.title}
              classname={`${item.id === 1 ? "row-span-2 col-span-1" : ""} ${
                item.id === 5 ? "row-span-2 col-span-1" : ""
              } ${item.id === 6 ? "col-span-2" : ""}`}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
