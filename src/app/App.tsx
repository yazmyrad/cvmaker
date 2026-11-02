import { useState } from 'react'
import { EducationList } from '../features/education/components/EducationList'
import type { EducationEntry } from '../features/education/types'

import { ExperienceList } from '../features/experience/components/ExperienceList'
import type { ExperienceEntry } from '../features/experience/types'
import Skills from '../features/skills/Skills'
import Introduction from '../features/introduction/Introduction'
import type { Contact } from '../features/contacts/types'
import Contacts from '../features/contacts/Contacts'
import type { PortfolioEnrty } from '../features/portfolio/types'
import PortfolioForm from '../features/portfolio/PortfolioForm'
import { useEntityList } from '../features/common/useEntityList'

import styles from "./App.module.css"
import CVPreview from '../features/cv/CVPreview'
import Button from '../components/UI/Button'
import { useCVPrint } from '../features/cv/lib/useCVPrint'

function App() {
  const { contentRef, handlePrint } = useCVPrint();

  const education = useEntityList<EducationEntry>(
    () => ({ 
      degree: "Bachelor's", 
      institution: "", 
      major: "", 
      from: "", 
      to: "" 
    })
  );

  const experience = useEntityList<ExperienceEntry>(
    () => ({
      title: '',
      company: '',
      location: '',
      achievements: '',
      contact: '',
      from: "",
      to: "",
    })
  );

  const portfolio = useEntityList<PortfolioEnrty>(
    () => ({
      name: '',
      description: '',
      link: ''
    })
  )

  const [skills, setSkills] = useState<string[]>([])

  const onChange = (vals: string[]) => {
    setSkills([...vals])
  }

  const [contact, setContact] = useState<Contact>(
    {
      name: "",
      surname: "",
      phone: "",
      email: "",
      citizenship: "",
      birthYear: "",
    }
  )
  const updateHeader = (field: keyof Contact, value: string) => {
    setContact(prev => ({ ...prev, [field]: value }));
  };

  const [introduction, setIntroduction] = useState("");

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>CV builder</h1>
      <div className={styles.toolbar}>
        <Button onClick={handlePrint}>Download PDF</Button>
      </div>

      <div className={styles.layout}>
        <div className={styles.form}>
          <Contacts 
            contacts={contact} setContacts={updateHeader}
          />
          <Introduction value={introduction} onChange={setIntroduction} />
          <EducationList 
            education={education.items} 
            onAdd={education.add} 
            onChange={education.update} 
            onRemove={education.remove}
          />
          <ExperienceList 
            experience={experience.items} 
            onAdd={experience.add} 
            onChange={experience.update} 
            onRemove={experience.remove}
          />
          <PortfolioForm 
            projects={portfolio.items}
            onAdd={portfolio.add}
            onRemove={portfolio.remove} 
            onChange={portfolio.update} 
          />
          <Skills skills={skills} onChange={onChange} />
        </div>
        <aside className={styles.preview} ref={contentRef}>
          <CVPreview
            contacts={contact}
            introduction={introduction}
            education={education.items}
            experience={experience.items}
            projects={portfolio.items}
            skills={skills}
            
          />
        </aside>
      </div>
    </main>
  )
}

export default App