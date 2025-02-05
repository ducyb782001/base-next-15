import { SupportedProductEnv } from "@/constants/enum/env.enum";
import type { NextConfig } from "next";

const validEnvs = Object.values(SupportedProductEnv);
const env = process.env.NEXT_PUBLIC_ENV as SupportedProductEnv;
if (!env || !validEnvs.includes(env)) {
  throw new Error(
    `❌ Invalid NEXT_PUBLIC_ENV: Must be one of enum ${validEnvs.join(", ")}`
  );
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: false,
  // compiler: {
  //   ...(process.env.NEXT_PUBLIC_ENV === "product" && {
  //     removeConsole: {
  //       exclude: ["error", "warn"],
  //     },
  //   }),
  // },
};

export default nextConfig;
