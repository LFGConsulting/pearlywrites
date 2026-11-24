import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Carried over from the legacy .eslintrc.js: apostrophes and quotes are
    // fine in JSX copy; only flag characters that actually break JSX.
    rules: {
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            { char: ">", alternatives: ["&gt;"] },
            { char: "}", alternatives: ["&#125;"] },
          ],
        },
      ],
    },
  },
  {
    // CommonJS config files load plugins with require().
    files: ["*.config.js", "*.config.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  // Overriding ignores replaces eslint-config-next's defaults, so restate them.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Written by scripts/update-image-domains.js at prebuild.
    "remote-patterns.generated.js",
  ]),
]);

export default eslintConfig;
