const ImageGallery = ({ image, title, classname }) => {
  return (
    <img
      src={image}
      alt={title}
      loading="lazy"
      className={`h-full w-full object-cover rounded-xl ${classname}`}
    />
  );
};

export default ImageGallery;
