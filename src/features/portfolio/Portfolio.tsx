import Button from "../../components/UI/Button"
import type { PortfolioProps } from "./types"
import styles from "./Portfolio.module.css"

export default function Portfolio({project, onChange, onRemove}: PortfolioProps){

    return (
        <div>
            <div className={styles.field}>
            <label className={styles.label} htmlFor={`name-${project.id}`}>Project name</label>
            <input
                id={`name-${project.id}`}
                className={styles.input}
                type="text"
                value={project.name}
                onChange={(e) => onChange("name", e.target.value)}
            />
            </div>

            <div className={styles.field}>
            <label className={styles.label} htmlFor={`description-${project.id}`}>Description</label>
            <textarea
                id={`description-${project.id}`}
                className={styles.textarea}
                value={project.description}
                onChange={(e) => onChange("description", e.target.value)}
                rows={3}
            />
            </div>

            <div className={styles.field}>
            <label className={styles.label} htmlFor={`link-${project.id}`}>Link</label>
            <input
                id={`link-${project.id}`}
                className={styles.input}
                type="url"
                placeholder="https://example.com"
                value={project.link}
                onChange={(e) => onChange("link", e.target.value)}
            />
            </div>
            <Button variant="danger" onClick={onRemove}>Remove</Button>            
        </div>
    )
}