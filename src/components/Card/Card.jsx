import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const ProjectCard = ({ project }) => {
  return (
    <Card className="flex flex-col h-full border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all duration-300">
      <CardHeader className="space-y-1 p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-100">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-zinc-400">{project.description}</p>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <img
          src={project.image || "/api/placeholder/400/200"}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
        />
        <div className="space-y-2">
          <h4 className="font-semibold text-zinc-200">Key Features:</h4>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;