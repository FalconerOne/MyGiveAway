const { execSync } = require("child_process");

const safePackages = [
  "@radix-ui/react-dialog@1.0.5",
  "@radix-ui/react-dropdown-menu@2.0.6",
  "@radix-ui/react-toast@1.1.4",
  "@supabase/supabase-js@2.43.1",
  "next@14.0.0",
  "react@18.3.1",
  "react-dom@18.3.1"
];

console.log("🛠️ Running fallback-install.js to verify critical packages...");

safePackages.forEach(pkg => {
  try {
    execSync(`npm ls ${pkg.split("@")[0]} --depth=0`, { stdio: "ignore" });
    console.log(`✅ ${pkg} already installed`);
  } catch {
    console.log(`⚠️ ${pkg} missing — reinstalling safely...`);
    execSync(`npm install ${pkg} --legacy-peer-deps`, { stdio: "inherit" });
  }
});

console.log("✅ Fallback package verification complete.");
