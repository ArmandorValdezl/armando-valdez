// src/components/ProjectCard.tsx

import React from "react";
import Image from "next/image"; // Usamos el componente Image de Next.js para optimización
import { FiGithub, FiExternalLink } from "react-icons/fi"; // Importamos los iconos que usaremos
import { type Project } from "@/data/projects"; // Importamos el "molde" de nuestros datos

// Definimos que nuestro componente recibirá una propiedad (prop) llamada 'project'
// que debe seguir la estructura que definimos en 'Project'.
type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    // Contenedor principal de la tarjeta con el efecto "glassmorphism"
    <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg 
                    overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/10">
      
      {/* Imagen del Proyecto */}
      {/* Usamos un contenedor para que la imagen no ignore los bordes redondeados */}
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={`Captura de pantalla del proyecto ${project.title}`}
          fill // 'fill' hace que la imagen ocupe todo el espacio de su contenedor padre
          style={{ objectFit: "cover" }} // Esto asegura que la imagen cubra el espacio sin deformarse
        />
      </div>

      {/* Contenido de la tarjeta (título, descripción, etc.) */}
      <div className="p-6 flex flex-col justify-between h-64">
        <div>
          {/* Título y Enlaces */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
            <div className="flex gap-4 text-gray-300">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <FiGithub size={24} />
              </a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <FiExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        </div>

        {/* Etiquetas de Tecnología */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-400/10 text-cyan-300 text-xs font-bold px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;