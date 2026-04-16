
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCategory = ({ title, skills, className }: SkillCategoryProps) => {
  return (
    <div data-animate="section" className={cn("mb-8 section-shell", className)}>
      <h3 className="text-lg font-semibold mb-3 font-display">{title}</h3>
      <div data-animate="stagger" className="flex flex-wrap">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
