import { mobile, backend, creator, web } from "../assets";

const services = [
  {
    title: "Open-Genome Database",
    icon: web,
    link: "/database",
  },
  {
    title: "Open-Genome Toolkit",
    icon: mobile,
    link: "/toolkit",
  },
  {
    title: "Community",
    icon: backend,
    link: "/contribute",
  },
  {
    title: "Learn XAI",
    icon: creator,
    link: "/academy",
  },
];

const milestones = [
  {
    title: "Beginning",
    sub_title: "Brainstorming",
    icon: mobile,
    iconBg: "#d5d5d5",
    date: "Feb 2025",
    points: ["Core team formed", "Open-Genome Project vision", "Job description"],
  },
  {
    title: "Initialization",
    sub_title: "Technologies",
    icon: backend,
    iconBg: "#d5d5d5",
    date: "March 2025",
    points: ["Start Open-Genome Project", "Start Open-Genome Toolkit", "Start Open-Genome Website"],
  },
  {
    title: "Upcoming",
    sub_title: "Methods",
    icon: web,
    iconBg: "#d5d5d5",
    date: "XXX 2025",
    points: ["Start Open-Genome Database", "Gather active contributers", "Complete AI model analysis methodology"],
  },
];

export { services, milestones };
