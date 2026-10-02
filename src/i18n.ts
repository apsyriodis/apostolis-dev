import { siteConfig as en } from "./config";
import { siteConfig as el } from "./config.el";

export function getSiteConfig(pathname: string) {
  return pathname.startsWith("/el") ? el : en;
}