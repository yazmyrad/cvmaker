//import React from "react";

import Button from "../../../components/UI/Button";
import type { ExperienceListProps } from "../types";
import ExperienceForm from "./ExperienceForm";

export function ExperienceList(
    {experience, onAdd, onChange, onRemove}: ExperienceListProps
){
    return (
        <section>
            {
                experience.length == 0 ? 
                    (<p>No experience entries yet</p> )
                    :
                    (experience.map((entry)=>(
                    <ExperienceForm 
                        key={entry.id} 
                        entry={entry} 
                        onChange={(field, value) => onChange(entry.id, field, value)}
                        onRemove={() => onRemove(entry.id)} 
                    />
                )))
                
            }   
            <Button onClick={onAdd}>Add experience</Button>
        </section>
    )
}