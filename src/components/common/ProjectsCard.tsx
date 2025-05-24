import React from 'react';

/**
 * Props interface for the ProjectsCard component
 * @interface ProjectsCardProps
 */
interface ProjectsCardProps {
    /** URL of the project image */
    src: string;
    /** URL of the project repository or live demo */
    link: string;
    /** Title of the project */
    h3: string;
    /** Description of the project */
    p: string;
}

/**
 * ProjectsCard Component
 * 
 * A reusable card component for displaying project information.
 * Each card shows:
 * 1. Project image
 * 2. Project title
 * 3. Project description
 * 4. Link to project repository/demo
 * 
 * @param {ProjectsCardProps} props - Component props
 * @returns {JSX.Element} Project card with hover effect
 */
const ProjectsCard: React.FC<ProjectsCardProps> = ({ src, link, h3, p }) => {
    return (
        <a href={link} target='_blank' rel="noopener noreferrer">
            <img className='hover' src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
    );
}

export default ProjectsCard; 