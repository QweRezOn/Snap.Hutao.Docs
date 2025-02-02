import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "文档", icon: "iconfont icon-article", link: "/zh/menu.html" },
  {
    text: "下载",
    icon: "iconfont icon-install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
  },
  {
    text: "加入用户社区",
    icon: "iconfont icon-community",
    link: "/zh/community",
  },
  {
    text: "服务可用性",
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
