"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

import { contactSchema } from "@/validator/contact";
import TextModal from "../common/TextModal";
import FormInput from "../common/FormInput";

const ContactForm = () => {
  const [textModal, setTextModal] = useState({
    visible: false,
    type: "primary",
    title: "",
    description: "",
  });

  const resetTextModal = useCallback(() => {
    setTextModal((prevState) => ({
      ...prevState,
      visible: false,
    }));
  }, []);

  const onSubmit = useCallback(async (values, { resetForm, setSubmitting }) => {
    try {
      await axios.post("/api/contact", values);
      resetForm();
      setTextModal({
        visible: true,
        type: "primary",
        title: "Message Sent",
        description: "Thanks for your message, I'll respond to you soon.",
      });
    } catch (err) {
      setSubmitting(false);
      let message = "Something went wrong, try again later!";
      if (
        err.response &&
        err.response.data &&
        typeof err.response.data === "string"
      ) {
        message = err.response.data;
      }
      setTextModal({
        visible: true,
        type: "failed",
        title: "Oops!",
        description: message,
      });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  const nameInputBorder =
    formik.touched.name && formik.errors.name
      ? "border-red-600 dark:border-red-500"
      : "border-black/[.45] dark:border-white/60 dark:focus:border-blue-500 focus:border-blue-600";

  return (
    <>
      <form
        className="grid grid-cols-2 gap-5"
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            e.preventDefault();
          }
        }}
      >
        <div className="relative col-span-2 md:col-span-1">
          <FormInput
            as="input"
            label="Name"
            type="text"
            placeholder=""
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
        </div>
        <div className="relative col-span-2 md:col-span-1">
          <FormInput
            as="input"
            label="Email"
            type="email"
            placeholder=""
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
        </div>
        <div className="relative col-span-2">
          <FormInput
            as="textarea"
            label="Message"
            rows="4"
            placeholder=""
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.message}
            error={formik.errors.message}
          />
        </div>
        <button
          type="submit"
          className="relative group col-span-2 rounded-full py-1.5 bg-blue-600 dark:bg-blue-500 disabled:bg-black/[.38] disabled:dark:bg-white/[.38] hover:brightness-90 hover:disabled:brightness-100 active:brightness-100 overflow-hidden"
          disabled={formik.isSubmitting}
        >
          <div className="absolute inset-0 group-active:bg-white/25 group-disabled:bg-white/0" />
          <div className="text-white flex justify-center items-center">
            {formik.isSubmitting && (
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-blue-600 dark:text-blue-500 animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {formik.isSubmitting ? (
              <span className="text-white">Sending...</span>
            ) : (
              <span className="text-white">Send</span>
            )}
          </div>
        </button>
      </form>
      <TextModal
        isOpen={textModal.visible}
        onClose={resetTextModal}
        title={textModal.title}
        type={textModal.type}
        description={textModal.description}
      />
    </>
  );
};

export default ContactForm;
