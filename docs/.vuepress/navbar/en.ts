import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Document", icon: "iconfont icon-article", link: "/en/menu.html" },
  {
    text: "Download",
    icon: "iconfont icon-install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
  },
  {
    text: "Community",
    icon: "iconfont icon-community",
    link: "/en/community",
  },
  {
    text: "Service Availability",
    icon: "iconfont icon-define",
    children: [
      {
        text: "UptimeRobot",
        icon: "/images/202312/uptimerobot-logo.svg",
        link: "https://status.hut.ao/",
      },
      {
        text: "Uptime Kuma",
        icon: "/images/202312/uptime-kuma.svg",
        link: "https://status.snapgenshin.cn/status",
      }
    ]
  },
]);
