import styles from "./SkillsPreview.module.css"

type Props = { skills: string[] };

export default function SkillsPreview({ skills }: Props) {
  if (skills.length === 0) return null;
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <ul className={styles.list}>
        {skills.map((s) => <li key={s} className={styles.item}>{s}</li>)}
      </ul>
    </section>
  );
}