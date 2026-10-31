import { useState } from "react";
import type { SkillsProps } from "./types";
import Button from "../../components/UI/Button";

export default function Skills({skills, onChange}: SkillsProps){

    const [skill, setSkill] = useState<string>('')

    const onAdd = () => {
        onChange([...skills, skill.trim()])
        setSkill("")
    }

    return (
        <div>
            <input 
                value={skill}
                type="text"
                placeholder="Add your skills"
                onChange={(e) => setSkill(e.target.value)}
            />
            <Button onClick={onAdd} onKeyDown={(e) => e.key === "Enter"} >Add</Button>
            
            <p>{skills.map(
                (s, i) => 
                <span key={i}
                    >{s}
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => onChange(skills.filter((_, j) => j !== i))}>
                    x</Button>
                </span>)
            }</p>
        </div>
    )
}