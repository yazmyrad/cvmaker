import { useState } from 'react'
import './App.css'

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


function App() {

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


  return (
    <>
    <Contacts 
      contacts={contact}
      setContacts={updateHeader}
    />
    <Introduction />
    <div>
      <h2>Education</h2>
      <EducationList 
        education={education.items} 
        onAdd={education.add} 
        onChange={education.update} 
        onRemove={education.remove}
      />
    </div>
    <div>
      <h2>Experience</h2>
      <ExperienceList 
        experience={experience.items} 
        onAdd={experience.add} 
        onChange={experience.update} 
        onRemove={experience.remove}
      />
    </div>
    <div>
      <h2>Skills</h2>
      <Skills skills={skills} onChange={onChange}/>
    </div>
    <div>
      <h2>Portfolio</h2>
      <PortfolioForm 
        projects={portfolio.items}
        onAdd={portfolio.add}
        onRemove={portfolio.remove} 
        onChange={portfolio.update} 
      />
    </div>
    </>
  )
}

export default App