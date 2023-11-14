import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const bgColor = {
  success: "bg-green-600 dark:bg-green-500",
  failed: "bg-red-600 dark:bg-red-500",
  primary: "bg-blue-600 dark:bg-blue-500",
};

const textColor = {
  success: "text-green-600 dark:text-green-500",
  failed: "text-red-600 dark:text-red-500",
  primary: "text-black/[0.87] dark:text-white/[0.87]",
};

const TextModal = ({ isOpen, onClose, title, description, type }) => {
  const chosenBg = bgColor[type] || "bg-blue-600 dark:bg-blue-500";
  const chosenText =
    textColor[type] || "text-black/[0.87] dark:text-white/[0.87]";

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center px-4">
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="text-center bg-light dark:bg-dark-04dp shadow-04dp p-6 rounded-xl w-80">
              <Dialog.Title
                className={`font-title font-semibold text-lg ${chosenText}`}
              >
                {title}
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm sm:text-base">
                {description}
              </Dialog.Description>
              <div className="mt-4">
                <button
                  className={`relative group rounded-full py-1.5 px-7 text-sm sm:text-base hover:brightness-90 active:brightness-100 overflow-hidden ${chosenBg}`}
                  onClick={onClose}
                >
                  <div className="absolute inset-0 group-active:bg-white/25" />
                  <span className="text-white">Close</span>
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TextModal;
