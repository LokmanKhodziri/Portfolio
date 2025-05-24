import React from 'react';

/**
 * Props interface for the SkillList component
 * @interface SkillListProps
 */
interface SkillListProps {
    /** URL of the skill icon (checkmark) */
    src: string;
    /** Name of the skill */
    skill: string;
}

/**
 * SkillList Component
 * 
 * A reusable component for displaying individual skills.
 * Each skill item shows:
 * 1. A checkmark icon
 * 2. The skill name
 * 
 * Used in the Skills section to display technical skills
 * and other competencies.
 * 
 * @param {SkillListProps} props - Component props
 * @returns {JSX.Element} Skill item with icon and text
 */
const SkillList: React.FC<SkillListProps> = ({ src, skill }) => {
    return (
        <span>
            <img src={src} alt="Checkmark icon" />
            <p>{skill}</p>
        </span>
    );
}

export default SkillList; 