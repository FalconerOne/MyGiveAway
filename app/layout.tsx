import "./globals.css";
import GlobalToastProvider from "@/components/ui/GlobalToastProvider";

export const metadata = {
  title: "MyGiveAway App",
  description: "Join, Win, and track GiveAways that Delight's You & Support's Charity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {/* Global Toast Notifications available across all routes */}
        <GlobalToastProvider>
          {children}
        </GlobalToastProvider>
      </body>
    </html>
  );
}
