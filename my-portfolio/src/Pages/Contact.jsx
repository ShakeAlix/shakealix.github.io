const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-l from-slate-900 to-indigo-950 overflow-hidden">
      <div className="flex flex-col items-center pt-[10%]">
        {/* Title */}
        <h1 className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold font-josefin mb-16">
          Contact
        </h1>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center gap-8 text-white font-josefin text-sm">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <img src="../../icons/Vector.svg" />
            <span className="text-base">+92 310 4530453</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <img src="../../icons/email.svg" />
            <span className="text-base">alisheikhshahzaib@gmail.com</span>
          </div>

          {/* LinkedIn / Name */}
          <div className="flex items-center gap-4">
            {/* Simulated LinkedIn Icon */}
            <img src = "../../icons/Group 9.svg" />
            <a
              href="linkedin.com/in/sheikh-shahzaib-ali-285093247"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-base"
            >
              Sheikh Shahzaib Ali
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
