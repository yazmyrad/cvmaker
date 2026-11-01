import type { ContactProps } from "./types";
import styles from "./Contacts.module.css";

export default function Contacts({ contacts, setContacts }: ContactProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Contacts</h2>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contacts-name">First name</label>
          <input
            id="contacts-name"
            className={styles.input}
            type="text"
            value={contacts.name}
            onChange={(e) => setContacts("name", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contacts-surname">Last name</label>
          <input
            id="contacts-surname"
            className={styles.input}
            type="text"
            value={contacts.surname}
            onChange={(e) => setContacts("surname", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contacts-phone">Phone</label>
          <input
            id="contacts-phone"
            className={styles.input}
            type="tel"
            value={contacts.phone}
            onChange={(e) => setContacts("phone", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contacts-email">Email</label>
          <input
            id="contacts-email"
            className={styles.input}
            type="email"
            value={contacts.email}
            onChange={(e) => setContacts("email", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contacts-citizenship">Citizenship</label>
          <input
            id="contacts-citizenship"
            className={styles.input}
            type="text"
            value={contacts.citizenship}
            onChange={(e) => setContacts("citizenship", e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contacts-birthyear">Year of birth</label>
          <input
            id="contacts-birthyear"
            className={styles.input}
            type="text"
            inputMode="numeric"
            value={contacts.birthYear}
            onChange={(e) => setContacts("birthYear", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}