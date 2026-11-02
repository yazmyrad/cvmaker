import type { ExperienceEntry } from "../../experience/types";
import { formatMonth } from "../lib/formatMonth";
import styles from "./ExperiencePreview.module.css";

type Props = { items: ExperienceEntry[] };

export default function ExperiencePreview({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      {items.map((entry) => {
        const title = [entry.title, entry.company].filter(Boolean).join(" — ");
        const dateRange = formatRange(entry.from, entry.to);

        return (
          <div key={entry.id} className={styles.entry}>
            <div className={styles.entryHeader}>
                {title && <h3 className={styles.entryTitle}>{title}</h3>}
                {dateRange && <span className={styles.entryDates}>{dateRange}</span>}
            </div>
            {entry.location && <p className={styles.entrySubtitle}>{entry.location}</p>}
            {entry.achievements.trim() && (
                <p className={styles.entryBody}>{entry.achievements}</p>
            )}
            {entry.contact && (
                <p className={styles.entryLink}>
                <a href={entry.contact} target="_blank" rel="noopener noreferrer">
                    {entry.contact}
                </a>
                </p>
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