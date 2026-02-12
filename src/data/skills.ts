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
  SiExpo,
  SiSqlite,
  SiSupabase,
  SiMoodle,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillCategory = {
  key: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Expo", icon: SiExpo },
      { name: "Moodle", icon: SiMoodle },
    ],
  },
];