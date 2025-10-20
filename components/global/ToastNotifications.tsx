"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function notify(message: string) {
  toast(message, { position: "top-right", autoClose: 3000 });
}

export default function ToastNotifications() {
  return <ToastContainer />;
}
