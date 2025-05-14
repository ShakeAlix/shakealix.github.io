const Icon = ({ icon,label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Icon container based on your Figma structure */}
      <div className="w-9 h-9 p-[5px] bg-slate-600/50 rounded-[20px] inline-flex flex-col justify-center items-center gap-2.5">
        <img src={icon} alt={label} className="w-full h-full object-contain" />
      </div>
      
    </div>
  );
};

export default Icon;
