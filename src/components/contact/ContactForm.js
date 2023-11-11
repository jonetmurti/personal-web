"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

import { contactSchema } from "@/validator/contact";
import TextModal from "../common/TextModal";

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
          <input
            type="text"
            className="z-10 peer block w-full focus:outline-none bg-transparent rounded-lg px-3.5 py-2 text-black/[.87] dark:text-white/[.87] border-2 border-black/[.45] dark:border-white/60 appearance-none dark:focus:border-blue-500 focus:border-blue-600"
            placeholder=""
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="z-0 leading-tight pointer-events-none transition-transform duration-300 absolute top-3 text-sm -translate-y-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 left-2.5 bg-light dark:bg-dark-02dp px-1 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-focus:scale-90 scale-90 peer-focus:-translate-y-5">
            Name
          </label>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-xs px-0.5 mt-0.5 text-red-600 dark:text-red-500">
              {`*) ${formik.errors.name}`}
            </div>
          ) : null}
        </div>
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="email"
            className="z-10 peer block w-full focus:outline-none bg-transparent rounded-lg px-3.5 py-2 text-black/[.87] dark:text-white/[.87] border-2 border-black/[.45] dark:border-white/60 appearance-none dark:focus:border-blue-500 focus:border-blue-600"
            placeholder=""
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="z-0 leading-tight pointer-events-none transition-transform duration-300 absolute top-3 text-sm -translate-y-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 left-2.5 bg-light dark:bg-dark-02dp px-1 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-focus:scale-90 scale-90 peer-focus:-translate-y-5">
            Email
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-xs px-0.5 mt-0.5 text-red-600 dark:text-red-500">
              {`*) ${formik.errors.email}`}
            </div>
          ) : null}
        </div>
        <div className="relative col-span-2">
          <textarea
            className="z-10 peer block w-full focus:outline-none bg-transparent rounded-lg px-3.5 py-2 text-black/[.87] dark:text-white/[.87] border-2 border-black/[.45] dark:border-white/60 appearance-none dark:focus:border-blue-500 focus:border-blue-600 resize-none"
            rows="4"
            placeholder=""
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="z-0 leading-tight pointer-events-none transition-transform duration-300 absolute top-8 text-sm -translate-y-10 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 left-2.5 bg-light dark:bg-dark-02dp px-1 peer-placeholder-shown:-translate-y-5 peer-placeholder-shown:scale-100 peer-focus:scale-90 scale-90 peer-focus:-translate-y-10">
            Message
          </label>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-xs px-0.5 mt-0.5 text-red-600 dark:text-red-500">
              {`*) ${formik.errors.message}`}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="relative group col-span-2 rounded-full bg-blue-600 py-1.5 dark:bg-blue-500 disabled:bg-black/[.38] disabled:dark:bg-white/[.38] hover:brightness-90 hover:disabled:brightness-100 active:brightness-100 overflow-hidden"
          disabled={formik.isSubmitting}
        >
          <div className="absolute inset-0 group-active:bg-white/25 group-disabled:bg-white/0" />
          <span className="text-white">Send</span>
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
