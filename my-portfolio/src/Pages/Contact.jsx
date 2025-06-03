const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-l from-slate-900 to-indigo-950 overflow-hidden">
      <div className="flex flex-col items-center pt-[10%]">
        {/* Title */}
        <h1 className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold font-josefin mb-16">
          Contact.
        </h1>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center gap-8 text-white font-josefin text-sm">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <img src="../../icons/Vector.svg" className="w-6 h-6"/>
            <span className="text-lg">+92 310 4530453</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <img src="../../icons/email.svg" className="w-7 h-7"/>
            <span className="text-lg">alisheikhshahzaib@gmail.com</span>
          </div>

          {/* LinkedIn / Name */}
          <div className="flex items-center gap-4">
            {/* Simulated LinkedIn Icon */}
            <img src = "../../icons/Group 9.svg" className="w-7 h-7"/>
            <a
              href="https://linkedin.com/in/sheikh-shahzaib-ali-285093247"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lg"
            >
              Sheikh Shahzaib Ali
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src = "../../icons/github 1.svg" className="w-7 h-7"/>
            <a
              href="https://github.com/ShakeAlix"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lg"
            >
              ShakeAlix
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
