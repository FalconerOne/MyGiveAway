import "./globals.css";
import { GlobalToastProvider } from "@/providers/GlobalToastProvider";

export const metadata = {
  title: "MyGiveAway App",
  description: "Join, Win, and track GiveAways that Delight's You & Support's Charity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalToastProvider>{children}</GlobalToastProvider>
      </body>
    </html>
  );
}
