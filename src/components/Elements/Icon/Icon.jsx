const Icon = (props) => {
  const { icon, title } = props;
  return (
    <div className="flex gap-3 items-center mt-4 poppins-bold">
      <p className="text-secondary shadow-[0px_0px_2px_#f6bd60] p-2 cursor-pointer hover:bg-primary hover:text-white duration-300 transition-all">
        {icon}
      </p>
      <span>{title}</span>
    </div>
  );
};

export default Icon;
