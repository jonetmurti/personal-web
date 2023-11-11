import { Dialog } from "@headlessui/react";
import Image from "next/image";

const ProjectDetail = ({ isOpen, setIsOpen, project }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 bg-blue-500"
    >
      <div className="fixed inset-0 backdrop-blur bg-black/30" />
      <div className="fixed flex items-center inset-0 overflow-auto px-4">
        <Dialog.Panel className="mx-auto max-w-xl max-h-screen rounded-xl overflow-hidden bg-white shadow-xl dark:bg-neutral-800">
          <div className="relative w-full aspect-video">
            <Image
              src={"/landscape_1.jpg"}
              alt={"Landscape"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="p-6 overflow-auto max-h-96">
            <Dialog.Title className="font-bold font-title text-3xl text-neutral-950 dark:text-neutral-50 mb-3">
              Respinos Health
            </Dialog.Title>
            <div className="mb-2">Jun 2021 - Aug 2021</div>
            <div className="mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              varius elit molestie ex tempus hendrerit. Vestibulum vel pulvinar
              dui. Suspendisse sit amet tristique quam. Etiam congue molestie
              eros vel consequat. Maecenas venenatis faucibus magna, vitae
              dapibus lacus mollis a. Donec maximus enim velit. Nam egestas
              vitae ligula a bibendum. In et nibh mi. Nunc eu libero id eros
              convallis eleifend vitae a ex.
            </div>
            {/* <div className="mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius elit molestie ex tempus hendrerit. Vestibulum vel pulvinar dui. Suspendisse sit amet tristique quam. Etiam congue molestie eros vel consequat. Maecenas venenatis faucibus magna, vitae dapibus lacus mollis a. Donec maximus enim velit. Nam egestas vitae ligula a bibendum. In et nibh mi. Nunc eu libero id eros convallis eleifend vitae a ex.
            </div>
            <div className="mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius elit molestie ex tempus hendrerit. Vestibulum vel pulvinar dui. Suspendisse sit amet tristique quam. Etiam congue molestie eros vel consequat. Maecenas venenatis faucibus magna, vitae dapibus lacus mollis a. Donec maximus enim velit. Nam egestas vitae ligula a bibendum. In et nibh mi. Nunc eu libero id eros convallis eleifend vitae a ex.
            </div>
            <div className="mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius elit molestie ex tempus hendrerit. Vestibulum vel pulvinar dui. Suspendisse sit amet tristique quam. Etiam congue molestie eros vel consequat. Maecenas venenatis faucibus magna, vitae dapibus lacus mollis a. Donec maximus enim velit. Nam egestas vitae ligula a bibendum. In et nibh mi. Nunc eu libero id eros convallis eleifend vitae a ex.
            </div>
            <div className="mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius elit molestie ex tempus hendrerit. Vestibulum vel pulvinar dui. Suspendisse sit amet tristique quam. Etiam congue molestie eros vel consequat. Maecenas venenatis faucibus magna, vitae dapibus lacus mollis a. Donec maximus enim velit. Nam egestas vitae ligula a bibendum. In et nibh mi. Nunc eu libero id eros convallis eleifend vitae a ex.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius elit molestie ex tempus hendrerit. Vestibulum vel pulvinar dui. Suspendisse sit amet tristique quam. Etiam congue molestie eros vel consequat. Maecenas venenatis faucibus magna, vitae dapibus lacus mollis a. Donec maximus enim velit. Nam egestas vitae ligula a bibendum. In et nibh mi. Nunc eu libero id eros convallis eleifend vitae a ex.
            </div> */}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectDetail;
