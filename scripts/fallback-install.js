import { execSync } from "child_process";

const safeDeps = [
  "@radix-ui/react-avatar@1.0.4",
  "@radix-ui/react-dialog@1.0.5",
  "@radix-ui/react-dropdown-menu@2.0.6",
  "@radix-ui/react-popover@1.0.7",
  "@radix-ui/react-tooltip@1.0.6"
];

console.log("🛠️ Running fallback install for safe Radix versions...");
for (const dep of safeDeps) {
  try {
    console.log(`Installing ${dep}...`);
    execSync(`npm install ${dep}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Failed to install ${dep}:`, err.message);
  }
}
