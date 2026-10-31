//import React from "react";
import Button from "../../../components/UI/Button";
import type { EducationFormProps } from "../types";

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
        <div>
            <label>
                Degree
                <select
                    value={entry.degree}
                    onChange={(e) => {onChange("degree", e.target.value)}}
                >
                    {educationLevels.map((lvl) => (
                        <option value={lvl} key={lvl}>{lvl}</option>
                    ))}
                </select>
            </label>

            <label>
                Institution
                <input
                    type="text"
                    placeholder="University name"
                    value={entry.institution}
                    onChange={(e) => onChange("institution", e.target.value)}
                />
            </label>

            <label>
                Major
                <input
                    type="text"
                    placeholder="Major"
                    value={entry.major}
                    onChange={(e) => onChange("major", e.target.value)}
                />
            </label>

            <label>
                From
                <input
                    type="month"
                    min="1990-01"
                    max={new Date().toISOString().slice(0, 7)}
                    value={entry.from}
                    onChange={(e) => onChange("from", e.target.value)}
                />
            </label>

            <label>
                To
                <input
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