import { ShowToastType } from "@/types/Toast";
import React, { createContext, useContext } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Define the type for the context value
interface ToastContextType {
  showToast: (
    type: string,
    message: string,
    options?: { autoClose: number }
  ) => ShowToastType;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  function showToast(
    type: string,
    message: string,
    options = {
      autoClose: 2000,
    }
  ): ShowToastType {
    // @ts-expect-error - showToast is not defined
    const toastFn = TOAST_TYPES[type] || toast.success;
    return toastFn(message, options);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer position="top-right" />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
