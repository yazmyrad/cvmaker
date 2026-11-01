import type { IntroductionProps } from "./type";
import styles from "./Introduction.module.css"

export default function Introduction({ value, onChange }: IntroductionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Introduction</h2>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="introduction">About you</label>
        <textarea
          id="introduction"
          className={styles.textarea}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="A short paragraph about your background, goals, and strengths."
          maxLength={500}
          rows={5}
        />
      </div>
    </section>
  );
}