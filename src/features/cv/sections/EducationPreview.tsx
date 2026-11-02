import type { EducationEntry } from "../../education/types";
import { formatMonth } from "../lib/formatMonth";
import styles from "./EducationPreview.module.css";

type Props = { items: EducationEntry[] };

export default function EducationPreview({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      {items.map((entry) => {
        const title = [entry.degree, entry.institution].filter(Boolean).join(" — ");
        const dateRange = formatRange(entry.from, entry.to);

        return (
          <div key={entry.id} className={styles.entry}>
            <div className={styles.entryHeader}>
              {title && <h3 className={styles.entryTitle}>{title}</h3>}
              {dateRange && <span className={styles.entryDates}>{dateRange}</span>}
            </div>
            {entry.major && <p className={styles.entrySubtitle}>{entry.major}</p>}
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