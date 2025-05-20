import { useState } from "react";
import experienceData from "../data/experienceData.js";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const segmentHeight = 60; // height of each segment on the line
  const lineTopOffset = 10; // padding from top

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-slate-900 to-indigo-950 text-white font-josefin flex flex-col items-center py-20">
      
      <h1 className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold font-josefin mb-16">
        Experience.
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl w-full px-4 pt-20">
        {/* Left: Timeline Line + Companies */}
        <div className="relative flex flex-col items-start pl-8">
          {/* Full white vertical line */}
          <div className="absolute left-1 top-3 h-full w-1 bg-white rounded" />

          {/* Cyan segment based on selection */}
          <div
            className="absolute left-1 w-1 bg-cyan-500 rounded transition-all duration-300"
            style={{
              top: `${selected * segmentHeight + lineTopOffset}px`,
              height: `${segmentHeight}px`,
            }}
          />

          {/* Company Names */}
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className={`h-[${segmentHeight}px] flex items-center cursor-pointer transition-colors duration-200`}
              onClick={() => setSelected(idx)}
              style={{ height: `${segmentHeight}px` }}
            >
              <span
                className={`ml-4 text-2xl transition-all ${
                  selected === idx ? "text-cyan-500 font-semibold" : "text-white"
                }`}
              >
                {exp.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Experience Details */}
        <div className="flex-1 flex flex-col px-10">
          <h2 className="text-white text-2xl">
            <span className="font-semibold text-3xl">{experienceData[selected].role}</span>{" "}
            <span className="text-cyan-500 text-3xl">@ {experienceData[selected].name}</span>
          </h2>
          <span className="font-normal">{experienceData[selected].time}</span>

          <div className="mt-4">
            <ul className="list-disc pl-5 text-lg leading-relaxed">
              {experienceData[selected].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
