export type EducationEntry = {
    id: string,
    degree: string,
    major: string,
    institution: string,
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

export type EducationFormProps = {
    entry: EducationEntry,
    onChange: (field: keyof Omit<EducationEntry, 'id'>, value: string) => void,
    onRemove: () => void
}

export type EducationListProps = {
    education: EducationEntry[],
    onAdd: () => void
    onChange: (id:string, field: keyof Omit<EducationEntry, 'id'>, value: string) => void,
    onRemove: (id:string) => void
}