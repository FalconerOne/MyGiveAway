import { execSync } from "child_process";

const safeDeps = [
  "@radix-ui/react-avatar@1.1.2",
  "@radix-ui/react-dialog@1.1.2",
  "@radix-ui/react-dropdown-menu@2.1.1",
  "@radix-ui/react-popover@1.1.2",
  "@radix-ui/react-tooltip@1.1.3",
  "@radix-ui/react-tabs@1.1.1",
  "@radix-ui/react-toast@1.1.3",
  "@supabase/auth-helpers-nextjs@0.9.0",
  "next-pwa@5.6.0"
];

console.log("🛠️ Running fallback install for safe dependencies...");

for (const dep of safeDeps) {
  try {
    // Check if already installed
    require.resolve(dep.split("@")[0]);
    console.log(`✅ ${dep} is already installed`);
  } catch {
    try {
      console.log(`⚡ Installing ${dep}...`);
      execSync(`npm install ${dep} --legacy-peer-deps`, { stdio: "inherit" });
      console.log(`✅ Installed ${dep}`);
    } catch (err) {
      console.warn(`❌ Could not install ${dep}, skipping: ${err.message}`);
    }
  }
}

console.log("🎉 Fallback check complete.");
