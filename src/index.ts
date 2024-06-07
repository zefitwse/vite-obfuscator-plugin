import { exec } from "child_process";
import { promisify } from "util";
import { Plugin } from "vite";

const execAsync = promisify(exec);

interface ObfuscatorPluginOptions {
  inputDir?: string;
  outputDir?: string;
  options?: Record<string, any>;
}

function buildObfuscatorCommand(
  inputDir: string,
  outputDir: string,
  options: Record<string, any>
): string {
  const optionsString = Object.entries(options)
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? `${key}` : "";
      }
      return `${key} ${value}`;
    })
    .join(" ");

  return `javascript-obfuscator ${inputDir} --output ${outputDir} ${optionsString}`;
}

export default function obfuscatorPlugin({
  inputDir = "./dist/static/js",
  outputDir = "./dist/obfuscated",
  options = {},
}: ObfuscatorPluginOptions = {}): Plugin {
  return {
    name: "vite-plugin-obfuscator",
    apply: "build",
    async closeBundle() {
      const command = buildObfuscatorCommand(inputDir, outputDir, options);
      console.log(`Running command: ${command}`);
      try {
        await execAsync(command);
        console.log("Obfuscation complete.");
      } catch (error) {
        console.error("Error during obfuscation:", error);
      }
    },
  };
}
