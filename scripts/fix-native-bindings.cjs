const fs = require("node:fs");
const path = require("node:path");

if (process.platform !== "win32" || process.arch !== "x64") {
  process.exit(0);
}

try {
  const nativePackageDir = path.dirname(require.resolve("lightningcss-win32-x64-msvc/package.json"));
  const lightningPackageDir = path.dirname(require.resolve("lightningcss/package.json"));
  const nativeBinary = path.join(nativePackageDir, "lightningcss.win32-x64-msvc.node");
  const expectedBinary = path.join(lightningPackageDir, "lightningcss.win32-x64-msvc.node");

  if (fs.existsSync(nativeBinary) && !fs.existsSync(expectedBinary)) {
    fs.copyFileSync(nativeBinary, expectedBinary);
  }
} catch {
  // Optional native packages can be absent on non-Windows installs or partial installs.
}
