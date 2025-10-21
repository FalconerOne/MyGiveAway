/**
 * Dependency Fallback Script
 * This ensures your build doesn't break when npm packages are missing or unpublished.
 */
import { execSync } from "child_process";

const safePackages = [
  "@radix-ui/react-dropdown-menu@1.1.3",
  "@radix-ui/react-dialog@1.1.2",
  "@radix-ui/react-toast@1.1.4",
  "@radix-ui/react-avatar@1.0.5",
  "@radix-ui/react-popover@1.1.2",
  "@radix-ui/react-tooltip@1.1.4"
];

console.log("🔍 Checking dependencies for missing or broken versions...");

try {
  execSync(`npm install ${safePackages.join(" ")} --legacy-peer-deps`, {
    stdio: "inherit"
  });
  console.log("✅ Dependency fallback complete.");
} catch (error) {
  console.error("⚠️  Dependency fallback failed:", error.message);
}
