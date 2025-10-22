import { GlobalToastProvider } from "@/providers/GlobalToastProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalToastProvider>{children}</GlobalToastProvider>
      </body>
    </html>
  );
}
