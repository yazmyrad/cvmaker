import Button from "../../components/UI/Button";
import Portfolio from "./Portfolio";
import type { PortfolioEnrty, PortfolioFormProps } from "./types";

export default function PortfolioForm({projects, onChange, onAdd, onRemove}: PortfolioFormProps){

    return (
        <section>
        {
            projects.length == 0 ?
            (<p>Nothing in Portfolio</p>) 
            :
            (projects.map((project) => 
            <Portfolio 
                project={project} 
                onChange={(field: keyof Omit<PortfolioEnrty, 'id'>, value: string) => onChange(project.id, field, value)} 
                onRemove={() => onRemove(project.id)}
            />))
        }
        <Button onClick={onAdd}>Add</Button>
        </section>
    )
}