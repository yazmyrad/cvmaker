//import React from "react";

import Button from "../../../components/UI/Button";
import type { ExperienceListProps } from "../types";
import ExperienceForm from "./ExperienceForm";
import styles from "./ExperienceList.module.css";

export function ExperienceList(
    {experience, onAdd, onChange, onRemove}: ExperienceListProps
){
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Experience</h2>
            </div>
            {
                experience.length == 0 ? 
                    (<p className={styles.empty}>No experience entries yet</p> )
                    :
                    (
                        <div className={styles.cards}>
                        {experience.map((entry, idx) => (
                            <div key={entry.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>
                                    {[entry.title, entry.company].filter(Boolean).join(" — ") || `Experience #${idx + 1}`}
                                </h3>
                            </div>
                            <ExperienceForm 
                                key={entry.id} 
                                entry={entry} 
                                onChange={(field, value) => onChange(entry.id, field, value)}
                                onRemove={() => onRemove(entry.id)} 
                            />
                            </div>
                        ))}
                        </div>
                    )}
            <div className={styles.addRow}>
                <Button onClick={onAdd}>+ Add experience</Button>
            </div>
        </section>
    )
}