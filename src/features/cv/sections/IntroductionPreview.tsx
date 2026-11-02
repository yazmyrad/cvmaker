import styles from "./IntroductionPreview.module.css";

type Props = { text: string };

export default function IntroductionPreview({ text }: Props) {
  if (!text.trim()) return null;
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Introduction</h2>
      <p className={styles.body}>{text}</p>
    </section>
  );
}