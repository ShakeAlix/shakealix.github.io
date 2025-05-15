const RightTemplate = ({ course, name, desc, img }) => {
  return (
    <div className="w-full max-w-[1216px] mx-auto px-5 py-10 flex flex-col md:flex-row-reverse items-start gap-10">
      {/* Right side (text content) */}
      <div className="flex-1 flex flex-col items-end gap-4">
        {/* Course and Project Name */}
        <div className="flex flex-col gap-1 text-right">
          <div className="text-cyan-400 text-lg font-josefin">{course}</div>
          <div className="text-white text-5xl font-semibold font-josefin">{name}</div>
        </div>

        {/* Description Box */}
        <div className="bg-gradient-to-r from-purple-950/95 to-indigo-950/95 rounded-[10px] p-5 max-w-[676px]">
          <p className="text-white text-base font-josefin leading-loose text-left">{desc}</p>
        </div>
      </div>

      {/* Left side (image box) */}
      <div className="flex-shrink-0 w-full md:w-[548px] h-[288px] bg-gradient-to-br from-purple-950 to-indigo-950 rounded-2xl flex items-center justify-center overflow-hidden">
        <img
          className="w-[90%] h-[90%] object-cover rounded-xl"
          src={img}
          alt={name}
        />
      </div>
    </div>
  );
};

export default RightTemplate;
