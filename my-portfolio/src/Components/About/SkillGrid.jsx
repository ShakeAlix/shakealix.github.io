import Icon from "./Icons";

const SkillGrid = () => {
  return (
    <div className="w-full px-10 py-8 flex flex-col items-center gap-6">
      {/* Top row: 8 icons */}
      <div className="flex flex-wrap justify-center gap-6">
        <Icon icon="../../icons/figma.svg" />
        <Icon icon="../../icons/react.svg" />
        <Icon icon="../../icons/python.svg" />
        <Icon icon="../../icons/c (1).svg" />
        <Icon icon="../../icons/c-original.svg" />
        <Icon icon="../../icons/express.svg" />
        <Icon icon="../../icons/file-type-css.svg" />
        <Icon icon="../../icons/file-type-html.svg" />
      </div>

      {/* Bottom row: 7 icons, centered between top ones */}
      <div className="flex flex-wrap justify-center gap-6 mt-0.5 ml-[2.5rem] sm:ml-[3rem] md:ml-[3.5rem] lg:ml-[0.5rem]">
        <Icon icon="../../icons/golang.svg" />
        <Icon icon="../../icons/heroku.svg" />
        <Icon icon="../../icons/javascript.svg" />
        <Icon icon="../../icons/mongodb.svg" />
        <Icon icon="../../icons/node.svg" />
        <Icon icon="../../icons/vercel.svg" />
        <Icon icon="../../icons/tailwind-css.svg" />
      </div>
    </div>
  );
};

export default SkillGrid;


