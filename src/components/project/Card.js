import Image from "next/image";

const CardLink = ({ project, children, className }) => {
  if (project?.link) {
    return (
      <a
        className={className}
        target="_blank"
        href={project?.link}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return <div className={`cursor-pointer ${className}`}>{children}</div>;
};

const Card = ({ project, className }) => {
  const defaultClass =
    "block rounded-xl overflow-hidden shadow-02dp bg-light dark:bg-dark-02dp transition duration-300 translate-0 hover:-translate-y-2";
  const customClass = `${className ? " " : ""}${className || ""}`;
  return (
    <CardLink project={project} className={`${defaultClass}${customClass}`}>
      <div className="relative w-full aspect-video">
        <Image
          src={project?.img}
          alt={project?.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: project?.position || "center",
          }}
        />
      </div>
      <div className="p-3">
        <div className="text-base font-title font-bold text-black/[.87] dark:text-white/[.87] mb-1">
          {project?.title}
        </div>
        <div className="text-sm mb-4 text-black/60 dark:text-white/60">{project?.desc}</div>
        <div className="flex flex-wrap gap-x-3 text-black/[.70] dark:text-white/[.70] gap-y-1 text-xs mb-1">
          {project?.techs?.map((tech) => (
            <div key={tech} className="underline">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </CardLink>
  );
};

export default Card;
