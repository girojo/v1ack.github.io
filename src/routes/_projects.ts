import type { IProject } from "$lib/types"

export const projects: IProject[] = [
  {
    id: "docsView",
    name: "Docs View",
    image: "/docsview.svg",
    links: [
      { link: "https://galaxy.store/docview", title: "Store" },
      { link: "/projects/docsView", title: "More" },
    ],
    description:
      "Tizen app for Samsung Galaxy Watch, Samsung Galaxy Watch Active, Samsung Gear S3 that allows you to open PDFs, markdown and txt",
    color: "#1caeec",
  },
  {
    id: "svelte-virtual-scroll-list",
    name: "svelte-virtual-scroll-list",
    image: "/virtual-scroll-icon.png",
    links: [
      {
        link: "https://www.npmjs.com/package/svelte-virtual-scroll-list",
        title: "npm",
      },
      {
        link: "https://github.com/v1ack/svelte-virtual-scroll-list",
        title: "GitHub",
      },
      { link: "/svelte-virtual-scroll-list", title: "Demo" },
    ],
    description: "Virtualized scrolling for big lists for Svelte",
    color: "#eee",
  },
  {
    id: "fa-schedule",
    name: "University schedule",
    image: "/fa-schedule.png",
    links: [
      {
        link: "https://github.com/financial-university/calendar-service",
        title: "GitHub",
      },
      { link: "https://schedule.fa.ru", title: "Open" },
    ],
    description: "Calendar service for Financial University schedule",
    color: "#FEDED9",
  },
  {
    id: "fa-bot",
    name: "Schedule chat-bot",
    image: "/fa-bot.png",
    links: [
      {
        link: "https://github.com/financial-university/bot-vk",
        title: "GitHub",
      },
      { link: "https://bot.fa.ru", title: "Open" },
    ],
    description: "VK bot for Financial University schedule",
    color: "#d9f7fe",
  },
  {
    id: "watchfaceEditor",
    name: "watchfaceEditor",
    image: "/wf-editor.png",
    description: "Online watchface editor for Amazfit Bip and Amazfit Cor",
    color: "rgb(78,177,255)",
    links: [{ link: "/watchfaceEditor", title: "Open" }],
  },
]
