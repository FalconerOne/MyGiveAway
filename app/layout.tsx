import "./globals.css";
import GlobalToastProvider from "@/components/ui/GlobalToastProvider";
import GlobalWinnerListener from "@/components/global/GlobalWinnerListener";

export const metadata = {
  title: "MyGiveAway App",
  description: "Join, Win, and track GiveAways that Delight's You & Support's Charity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const userRole = "guest"; // 🔹 Temporary placeholder — replace with real user.role from session later

  return (
    <html lang="en">
      <body>
        <GlobalToastProvider>
          <GlobalWinnerListener userRole={userRole} />
          {children}
        </GlobalToastProvider>
      </body>
    </html>
  );
}
