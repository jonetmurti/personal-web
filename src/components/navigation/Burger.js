import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Burger = ({ links }) => {
  const btnClasses = [
    "rotate-45 translate-y-1.5",
    "opacity-0",
    "-rotate-45 -translate-y-1.5",
  ];

  return (
    <Menu as="div" className="relative z-30">
      {({ open }) => (
        <>
          <Menu.Button className="flex flex-col w-8 p-1.5 gap-y-1">
            {btnClasses.map((btnClass) => (
              <div
                key={btnClass}
                className={`transition w-full h-0.5 rounded-full bg-black/[.87] dark:bg-white/[.87] ${
                  open ? btnClass : ""
                }`}
              ></div>
            ))}
          </Menu.Button>
          <Transition
            show={open}
            enter="transiton duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute transition duration-300 left-1.5 flex flex-col items-stretch rounded-xl bg-light dark:bg-dark-04dp py-2 shadow-04dp w-44">
              {links.map((link) => (
                <Menu.Item key={link.name} as={Fragment}>
                  {() => (
                    <Link
                      className="block text-black/[.87] dark:text-white/[.87] transition duration-300 hover:text-blue-600 dark:hover:text-blue-500 text-base px-4 py-2"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Burger;
