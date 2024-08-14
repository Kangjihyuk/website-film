import { Fragment } from "react";

const ImagesPerson = (props) => {
  const { image, alt } = props;
  return (
    <Fragment>
      <div className="flex items-center justify-center bg-white p-1 shadow-lg rounded-sm">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`w-10 h-10 rounded-full object-cover`}
        />
      </div>
    </Fragment>
  );
};

export default ImagesPerson;
