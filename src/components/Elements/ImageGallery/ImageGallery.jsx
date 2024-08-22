const ImageGallery = ({ image, title, classname }) => {
  return (
    <img
      src={image}
      alt={title}
      loading="lazy"
      className={`h-full w-full object-cover rounded-xl ${classname} hover:scale-90 duration-300 transition-all hover:grayscale cursor-pointer`}
    />
  );
};

export default ImageGallery;
