"use client";
import { useGlobalToast } from "./GlobalToastProvider";

export default function ToastButton() {
  const { showToast } = useGlobalToast();

  return (
    <button
      onClick={() => showToast("This is a sample toast!", "success")}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
    >
      Test Toast
    </button>
  );
}
