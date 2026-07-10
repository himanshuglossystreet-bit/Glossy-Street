const fs = require("node:fs");
const path = require("node:path");

const nativeTargets = {
  win32: {
    x64: {
      tailwind: {
        pkg: "@tailwindcss/oxide-win32-x64-msvc",
        file: "tailwindcss-oxide.win32-x64-msvc.node",
      },
      lightning: {
        pkg: "lightningcss-win32-x64-msvc",
        file: "lightningcss.win32-x64-msvc.node",
      },
    },
  },
  darwin: {
    arm64: {
      tailwind: {
        pkg: "@tailwindcss/oxide-darwin-arm64",
        file: "tailwindcss-oxide.darwin-arm64.node",
      },
      lightning: {
        pkg: "lightningcss-darwin-arm64",
        file: "lightningcss.darwin-arm64.node",
      },
    },
    x64: {
      tailwind: {
        pkg: "@tailwindcss/oxide-darwin-x64",
        file: "tailwindcss-oxide.darwin-x64.node",
      },
      lightning: {
        pkg: "lightningcss-darwin-x64",
        file: "lightningcss.darwin-x64.node",
      },
    },
  },
};

function packageDir(packageName) {
  try {
    return path.dirname(require.resolve(`${packageName}/package.json`));
  } catch {
    return findPnpmPackageDir(packageName);
  }
}

function findPnpmPackageDir(packageName) {
  const pnpmDir = path.join(process.cwd(), "node_modules", ".pnpm");
  if (!fs.existsSync(pnpmDir)) {
    throw new Error(`Unable to find ${packageName}`);
  }

  const encodedName = packageName.replace("/", "+");
  const entry = fs.readdirSync(pnpmDir).find((name) => name.startsWith(`${encodedName}@`));
  if (!entry) {
    throw new Error(`Unable to find ${packageName}`);
  }

  return path.join(pnpmDir, entry, "node_modules", ...packageName.split("/"));
}

function copyNativeBinary(sourcePackage, destinationPackage, fileName) {
  try {
    const source = path.join(packageDir(sourcePackage), fileName);
    const destination = path.join(packageDir(destinationPackage), fileName);

    if (fs.existsSync(source) && !fs.existsSync(destination)) {
      fs.copyFileSync(source, destination);
    }
  } catch {
    // Optional native packages are installed per platform; missing packages can be ignored.
  }
}

const target = nativeTargets[process.platform]?.[process.arch];

if (target) {
  copyNativeBinary(target.tailwind.pkg, "@tailwindcss/oxide", target.tailwind.file);
  copyNativeBinary(target.lightning.pkg, "lightningcss", target.lightning.file);
}
