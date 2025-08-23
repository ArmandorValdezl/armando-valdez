// src/data/skills.ts
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiPostgresql,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: IconType;
};

export const skillsData: Skill[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "GitHub", icon: SiGithub },
];