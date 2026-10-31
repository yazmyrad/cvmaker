//import React from "react";
import Button from "../../../components/UI/Button";
import type { ExperienceFormProps } from "../types";

export default function ExperienceForm(
    {entry, onChange, onRemove}: ExperienceFormProps
){

    return (
        <div>
            <label>
                Job Title
                <input
                    type="text"
                    value={entry.title}
                    onChange={(e) => onChange("title", e.target.value)}
                />
            </label>

            <label>
                Company/Organization
                <input
                    type="text"
                    value={entry.company}
                    onChange={(e) => onChange("company", e.target.value)}
                />
            </label>

            <label>
                Location
                <input
                    type="text"
                    placeholder="location of company"
                    value={entry.location}
                    onChange={(e) => onChange("location", e.target.value)}
                />
            </label>

            <label>
                Achievements
                <input
                    type="text"
                    placeholder="your achievements in that role"
                    value={entry.achievements}
                    onChange={(e) => onChange("achievements", e.target.value)}
                />
            </label>

            <label>
                Company/Organization site
                <input
                    type="url"
                    placeholder="https://example.com"
                    value={entry.contact}
                    onChange={(e) => onChange("contact", e.target.value)}
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