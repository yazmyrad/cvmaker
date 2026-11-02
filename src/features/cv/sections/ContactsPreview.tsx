import type { Contact } from "../../contacts/types";
import styles from "./ContactsPreview.module.css";

type Props = { contacts: Contact };

export default function ContactsPreview({ contacts }: Props) {
  const fullName = [contacts.name, contacts.surname].filter(Boolean).join(" ");

  const contactBits = [
    contacts.phone,
    contacts.email,
    contacts.citizenship,
    contacts.birthYear,
  ].filter(Boolean);

  if (!fullName && contactBits.length === 0) return null;

  return (
    <header className={styles.header}>
      {fullName && <h1 className={styles.name}>{fullName}</h1>}
      {contactBits.length > 0 && (
        <p className={styles.contactLine}>{contactBits.join(" · ")}</p>
      )}
    </header>
  );
}