export type Contact = {
    name: string
    surname: string
    phone: string
    email: string
    citizenship: string
    birthYear: string
}

export type ContactProps = {
    contacts: Contact
    setContacts: (field: keyof Contact, value: string) => void
}