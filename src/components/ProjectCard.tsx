
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github?: string;
  website?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
  website,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transform transition-transform hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mt-4">
          {tech.map((item) => (
            <Badge key={item} variant="secondary" className="bg-secondary/80">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(github || website) && (
        <CardFooter className="flex gap-4 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-tech-blue transition-colors"
              aria-label={`Github repo for ${title}`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-tech-blue transition-colors"
              aria-label={`Live website for ${title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
