import type { Contact } from "../contacts/types";
import type { EducationEntry } from "../education/types";
import type { ExperienceEntry } from "../experience/types";
import type { PortfolioEnrty } from "../portfolio/types";

export type CVPreviewProps = {
  contacts: Contact;
  introduction: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: PortfolioEnrty[];
  skills: string[];
};