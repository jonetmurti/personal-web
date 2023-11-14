import { createElement } from "react";

const TextField = ({ componentType, ...props }) => {
  return createElement(componentType, props);
};

const FormInput = ({ as, label, touched, error, ...props }) => {
  const componentType = as || "input";

  let fieldClasses = `z-10 peer block w-full focus:outline-none bg-transparent rounded-lg px-3.5 py-2 text-black/[.87] dark:text-white/[.87] appearance-none border-2 ${
    touched && error
      ? "border-red-600 dark:border-red-500"
      : "border-black/[.45] dark:border-white/60 focus:dark:border-blue-500 focus:border-blue-600"
  }${componentType == "textarea" ? " resize-none" : ""}`;
  let labelClasses = `z-0 pointer-events-none transition-background-transform duration-300 absolute top-3 text-sm -translate-y-6 left-2.5 bg-light dark:bg-dark-02dp px-1 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 scale-90 peer-focus:-translate-y-6 ${
    touched && error
      ? "text-red-600 dark:text-red-500"
      : "text-black/60 dark:text-white/60 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
  }`;
  return (
    <>
      <TextField
        componentType={componentType}
        className={fieldClasses}
        {...props}
      />
      <label className={labelClasses}>{label}</label>
      {touched && error ? (
        <div className="text-xs px-0.5 mt-0.5 text-red-600 dark:text-red-500">
          {`*) ${error}`}
        </div>
      ) : null}
    </>
  );
};

export default FormInput;
