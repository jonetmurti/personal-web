import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center bg-light dark:bg-dark transition-colors duration-300 min-h-screen">
      <div className="text-center flex-1">
        <div className="font-extrabold font-title text-black/[.87] dark:text-white/[.87] text-5xl md:text-7xl mb1 md:mb-2">
          404
        </div>
        <div className="text-base md:text-xl mb-2 md:mb-4">Page not found</div>
        <Link
          className="relative group rounded-full py-1.5 px-7 text-sm sm:text-base hover:brightness-90 active:brightness-100 overflow-hidden bg-blue-600 dark:bg-blue-500"
          href="/"
          replace={true}
        >
          <div className="absolute inset-0 group-active:bg-white/25" />
          <span className="text-white">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
