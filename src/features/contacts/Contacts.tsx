import type { ContactProps } from "./types";


export default function Contacts({contacts, setContacts}: ContactProps){

    return (
        <div>
            <h2>Contacts</h2>
            <input 
                type="text"
                value={contacts.name}
                required
                placeholder="Your first name"
                onChange={(e) => setContacts("name", e.target.value)}
            />
            <input 
                type="text"
                value={contacts.surname}
                required
                placeholder="Your last name"
                onChange={(e) => setContacts("surname", e.target.value)}
            />
            <input 
                type="tel"
                value={contacts.phone}
                placeholder="Your phone number"
                onChange={(e) => setContacts("phone", e.target.value)}
            />
            <input 
                type="email"
                value={contacts.email}
                required
                placeholder="Your email"
                onChange={(e) => setContacts("email", e.target.value)}
            />
            <input 
                type="citizenship"
                value={contacts.citizenship}
                placeholder="Your citizenship"
                onChange={(e) => setContacts("citizenship", e.target.value)}
            />
            <input 
                type="string"
                value={contacts.birthYear}
                placeholder="Your old you are"
                onChange={(e) => setContacts("birthYear", e.target.value)}
            />
        </div>
    )
}