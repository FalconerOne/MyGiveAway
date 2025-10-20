"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 py-4 text-center text-sm text-gray-500">
      <p>
        &copy; {currentYear} MyGiveAway App. Designed by{" "}
        <span className="text-orange-600 font-semibold">FalconerOne Technologies</span>.
      </p>
    </footer>
  );
}
