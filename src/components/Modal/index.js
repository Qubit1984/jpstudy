import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  /* bg-white */
  return (
    <div
      className="
    fixed inset-0 z-50 flex items-center  justify-center bg-gray-900 bg-opacity-50
    "
    >
      <div className="relative bg-light dark:bg-dark text-dark dark:text-light max-h-[80vh] p-8 rounded-lg shadow-lg w-full max-w-2xl overflow-auto">
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
