import { useState } from "react";
import type { SkillsProps } from "./types";
import styles from "./Skills.module.css";

export default function Skills({skills, onChange}: SkillsProps){

    const [skill, setSkill] = useState<string>('')

    const onAdd = () => {
        const value = skill.trim()
        if (!value || skills.includes(value)) return;
        onChange([...skills, skill.trim()])
        setSkill("")
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Skills</h2>

            <div className={styles.inputRow}>
                <input
                className={styles.input}
                type="text"
                placeholder="Add a skill..."
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                    e.preventDefault();
                    onAdd();
                    }
                }}
                />
                <button type="button" onClick={onAdd} disabled={!skill.trim()}>
                Add
                </button>
            </div>

            {skills.length === 0 ? (
                <p className={styles.empty}>No skills added yet.</p>
            ) : (
                <ul className={styles.chips}>
                {skills.map((skill) => (
                    <li key={skill} className={styles.chip}>
                    <span>{skill}</span>
                    <button
                        type="button"
                        className={styles.chipRemove}
                        aria-label={`Remove ${skill}`}
                        onClick={() => onChange(skills.filter((s) => s !== skill))}
                    >
                        ×
                    </button>
                    </li>
                ))}
                </ul>
            )}
            </section>
    )
}