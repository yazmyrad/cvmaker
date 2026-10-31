//import React from "react";

import Button from "../../../components/UI/Button";
import type { EducationListProps } from "../types";
import EducationForm from "./EducationForm";

import styles from './EducationList.module.css';

export function EducationList(
    {education, onAdd, onChange, onRemove}: EducationListProps
){
    return (
        <section className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.heading}>Education</h2>
        </div>

        {education.length === 0 ? (
            <p className={styles.empty}>No education entries yet.</p>
        ) : (
            <div className={styles.cards}>
            {education.map((entry, idx) => (
                <div key={entry.id} className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>
                    {entry.degree || `Education #${idx + 1}`}
                    </h3>
                </div>
                <EducationForm
                    entry={entry}
                    onChange={(field, value) => onChange(entry.id, field, value)}
                    onRemove={() => onRemove(entry.id)}
                />
                </div>
            ))}
            </div>
        )}

        <div className={styles.addRow}>
            <Button onClick={onAdd}>+ Add education</Button>
        </div>
        </section>
    )
}