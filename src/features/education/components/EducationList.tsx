//import React from "react";

import Button from "../../../components/UI/Button";
import type { EducationListProps } from "../types";
import EducationForm from "./EducationForm";

export function EducationList(
    {education, onAdd, onChange, onRemove}: EducationListProps
){
    return (
        <section>
            {
                education.length == 0 ? 
                    (<p>No education entries yet</p> )
                    :
                    (education.map((entry)=>(
                    <EducationForm 
                        key={entry.id} 
                        entry={entry} 
                        onChange={(field, value) => onChange(entry.id, field, value)}
                        onRemove={() => onRemove(entry.id)} 
                    />
                )))
                
            } 
            <Button onClick={onAdd}>Add education</Button>  
        </section>
    )
}