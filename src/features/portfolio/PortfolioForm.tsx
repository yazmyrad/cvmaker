import Button from "../../components/UI/Button";
import Portfolio from "./Portfolio";
import type { PortfolioEnrty, PortfolioFormProps } from "./types";
import styles from "./PortfolioForm.module.css"

export default function PortfolioForm({projects, onChange, onAdd, onRemove}: PortfolioFormProps){

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Portfolio</h2>
            </div>
        {

            projects.length == 0 ? 
            (<p className={styles.empty}>Nothing in Portfolio</p> )
            :
            (
                <div className={styles.cards}>
                {projects.map((project, idx) => (
                    <div key={project.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>
                            {project.name || `Project #${idx + 1}`}
                        </h3>
                    </div>
                    <Portfolio 
                        project={project} 
                        onChange={(field: keyof Omit<PortfolioEnrty, 'id'>, value: string) => onChange(project.id, field, value)} 
                        onRemove={() => onRemove(project.id)}
                    />
                    </div>
                ))}
                </div>
            )
        }
        <div className={styles.addRow}>
            <Button onClick={onAdd}>+ Add project</Button>
        </div>
        </section>
    )
}