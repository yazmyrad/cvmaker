//import React from "react";
import Button from "../../../components/UI/Button";
import type { ExperienceFormProps } from "../types";
import styles from "./ExperienceForm.module.css"

export default function ExperienceForm(
    {entry, onChange, onRemove}: ExperienceFormProps
){

    return (
        <div className={styles.field}>
            <label className={styles.label}>
                Job Title
                <input
                    className={styles.input}
                    type="text"
                    value={entry.title}
                    onChange={(e) => onChange("title", e.target.value)}
                />
            </label>

            <label className={styles.field}>
                Company/Organization
                <input
                    className={styles.input}
                    type="text"
                    value={entry.company}
                    onChange={(e) => onChange("company", e.target.value)}
                />
            </label>

            <label className={styles.field}>
                Location
                <input
                    className={styles.input}
                    type="text"
                    placeholder="location of company"
                    value={entry.location}
                    onChange={(e) => onChange("location", e.target.value)}
                />
            </label>

            <label className={styles.field}>
                Achievements
                <textarea
                    id={`achievements-${entry.id}`}
                    className={styles.textarea}
                    placeholder="your achievements in that role"
                    value={entry.achievements}
                    onChange={(e) => onChange("achievements", e.target.value)}
                />
            </label>

            <label className={styles.field}>
                Company/Organization site
                <input
                    className={styles.input}
                    type="url"
                    placeholder="https://example.com"
                    value={entry.contact}
                    onChange={(e) => onChange("contact", e.target.value)}
                />
            </label>

            <label className={styles.field}>
                From
                <input
                    className={styles.input}
                    type="month"
                    min="1990-01"
                    max={new Date().toISOString().slice(0, 7)}
                    value={entry.from}
                    onChange={(e) => onChange("from", e.target.value)}
                />
            </label>

            <label className={styles.field}>
                To
                <input
                    className={styles.input}
                    type="month"
                    min={entry.from || "1990-01"}
                    max={new Date().toISOString().slice(0, 7)}
                    value={entry.to}
                    onChange={(e) => onChange("to", e.target.value)}
                />
            </label>
            <Button variant="danger" onClick={onRemove}>Remove</Button>
        </div>
    )
}