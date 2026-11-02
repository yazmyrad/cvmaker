import type { PortfolioEnrty } from "../../portfolio/types";
import { formatMonth } from "../lib/formatMonth";
import styles from "./ExperiencePreview.module.css";

type Props = { items: PortfolioEnrty[] };

export default function ProjectsPreview({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Portfolio</h2>
      {items.map((entry) => {
        return (
          <div key={entry.id} className={styles.entry}>
            <div className={styles.entryHeader}>
                {entry.name && <h3 className={styles.entryTitle}>{entry.name}</h3>}
                {entry.link && (
                <a
                    className={styles.entryDates}
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link
                </a>
                )}
            </div>
            {entry.description && (
                <p className={styles.entryBody}>{entry.description}</p>
            )}
            </div>
        );
      })}
    </section>
  );
}

function formatRange(from: string, to: string): string {
  const a = formatMonth(from);
  const b = formatMonth(to) || "Present";
  if (!a && !b) return "";
  if (!a) return b;
  return `${a} — ${b}`;
}