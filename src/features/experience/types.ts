export type ExperienceEntry = {
    id: string,
    title: string,
    company: string,
    location: string,
    achievements: string,
    contact?: string,
    from: string, 
    to: string
}

export function checkPeriod(from: string, to: string = ''): boolean {
    const yearMonth: string = new Date().toISOString().slice(0, 7);
    if(to == ''){
        return from <= yearMonth
    }
    return from < to && to <= yearMonth
}

export type ExperienceFormProps = {
    entry: ExperienceEntry,
    onChange: (field: keyof Omit<ExperienceEntry, 'id'>, value: string) => void,
    onRemove: () => void
}

export type ExperienceListProps = {
    experience: ExperienceEntry[],
    onAdd: () => void
    onChange: (id:string, field: keyof Omit<ExperienceEntry, 'id'>, value: string) => void,
    onRemove: (id:string) => void
}