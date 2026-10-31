//import React from "react";
import Button from "../../../components/UI/Button";
import type { EducationFormProps } from "../types";
import styles from "./EducationForm.module.css";

export default function EducationForm(
    {entry, onChange, onRemove}: EducationFormProps
){

    const educationLevels = [
        "High School", 
        "Bachelor\’s",
        "Master\’s",
        "PhD"
    ] as const

    return (
        <form className={styles.form}>
        <div className={styles.field}>
            <label className={styles.label}>
                Degree
                <select
                    className={styles.select}
                    value={entry.degree}
                    onChange={(e) => {onChange("degree", e.target.value)}}
                >
                    {educationLevels.map((lvl) => (
                        <option value={lvl} key={lvl}>{lvl}</option>
                    ))}
                </select>
            </label>

            <label className={styles.label}>
                Institution
                <input
                    type="text"
                    placeholder="University name"
                    value={entry.institution}
                    onChange={(e) => onChange("institution", e.target.value)}
                    className={styles.input}
                />
            </label>

            <label className={styles.label}>
                Major
                <input
                    type="text"
                    placeholder="Major"
                    value={entry.major}
                    onChange={(e) => onChange("major", e.target.value)}
                    className={styles.input}
                />
            </label>

            <label className={styles.label}>
                From
                <input
                    type="month"
                    min="1990-01"
                    max={new Date().toISOString().slice(0, 7)}
                    value={entry.from}
                    onChange={(e) => onChange("from", e.target.value)}
                    className={styles.input}
                />
            </label>

            <label className={styles.label}>
                To
                <input
                    type="month"
                    min={entry.from || "1990-01"}
                    max={new Date().toISOString().slice(0, 7)}
                    value={entry.to}
                    onChange={(e) => onChange("to", e.target.value)}
                    className={styles.input}
                />
            </label>

            <Button variant="danger" onClick={onRemove}>Remove</Button>
        </div>
        </form>
    )
}