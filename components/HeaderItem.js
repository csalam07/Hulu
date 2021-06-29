function HeaderItem({ Icon, title, active }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-[#8AC248] group">
      <Icon
        className={`h-8 mb-1 group-hover:animate-bounce ${
          active && "text-[#8AC248] animate-pulse"
        }`}
      />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
