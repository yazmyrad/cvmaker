

import type { CVPreviewProps } from "./types";
import styles from "./CVPreview.module.css";
import IntroductionPreview from "./sections/IntroductionPreview";
import ContactsPreview from "./sections/ContactsPreview";
import EducationPreview from "./sections/EducationPreview";
import ExperiencePreview from "./sections/ExperiencePreview";
import ProjectsPreview from "./sections/ProjectsPreview";
import SkillsPreview from "./sections/SkillsPreview";

export default function CVPreview({
  contacts, introduction, education, experience, projects, skills,
}: CVPreviewProps) {
  const isEmpty =
    !contacts.name && !contacts.surname &&
    !introduction.trim() &&
    education.length === 0 && experience.length === 0 &&
    projects.length === 0 && skills.length === 0;

  if (isEmpty) {
    return <p className={styles.empty}>Start filling the form to see your CV here.</p>;
  }

  return (
    <article className={styles.cv}>
      <ContactsPreview contacts={contacts} />
      <IntroductionPreview text={introduction} />
      <EducationPreview items={education} />
      <ExperiencePreview items={experience} />
      <ProjectsPreview items={projects} />
      <SkillsPreview skills={skills} />
    </article>
  );
}