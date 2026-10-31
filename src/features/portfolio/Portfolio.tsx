import Button from "../../components/UI/Button"
import type { PortfolioProps } from "./types"


export default function Portfolio({project, onChange, onRemove}: PortfolioProps){

    return (
        <div>
            <h2>Portfolio</h2>
            <label>
                What the project is
                <input 
                    required
                    value={project.name}
                    type="text"
                    onChange={(e) => onChange("name", e.target.value)}
                />
            </label>
            <label>
                Description
                <input 
                    required
                    value={project.description}
                    type="text"
                    onChange={(e) => onChange("description", e.target.value)}
                />
            </label>
            <label>
                Link to the project
                <input 
                    required
                    value={project.link}
                    type="text"
                    onChange={(e) => onChange("link", e.target.value)}
                />
            </label>
            <Button variant="danger" onClick={onRemove}>Remove</Button>            
        </div>
    )
}