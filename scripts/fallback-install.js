import { execSync } from "child_process";

const safeDeps = [
  "@radix-ui/react-avatar@1.1.2",
  "@radix-ui/react-dialog@1.1.2",
  "@radix-ui/react-dropdown-menu@2.1.1",
  "@radix-ui/react-popover@1.1.2",
  "@radix-ui/react-tooltip@1.1.3",
  "@radix-ui/react-tabs@1.1.1",
  "@radix-ui/react-toast@1.1.3",
  "@supabase/auth-helpers-nextjs@0.9.0"
];

console.log("🛠️ Running fallback install for safe dependencies...");

for (const dep of safeDeps) {
  try {
    console.log(`Installing ${dep}...`);
    execSync(`npm install ${dep}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Failed to install ${dep}:`, err.message);
    process.exit(1);
  }
}

console.log("✅ All fallback packages installed successfully.");
