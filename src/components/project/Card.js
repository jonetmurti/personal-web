import Image from "next/image";

const Card = ({ project, className, onClick }) => {
  const defaultClass =
    "block cursor-pointer rounded-xl group overflow-hidden shadow-02dp bg-light dark:bg-dark-02dp transition duration-300 translate-0 hover:-translate-y-2";
  const customClass = `${className ? " " : ""}${className || ""}`;
  return (
    <div className={`${defaultClass}${customClass}`} onClick={onClick}>
      <div className="relative w-full aspect-video">
        <Image
          src={project?.img}
          alt={project?.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="p-3">
        <div className="text-base font-title font-bold text-black/[.87] dark:text-white/[.87] mb-1">
          {project?.title}
        </div>
        <div className="text-sm truncate mb-4">{project?.desc}</div>
        <div className="flex flex-wrap gap-x-3 text-black/[.70] dark:text-white/[.70] gap-y-1 text-xs mb-1">
          {project?.techs?.map((tech) => (
            <div key={tech} className="underline">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
