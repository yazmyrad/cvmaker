export type PortfolioEnrty = {
    id: string
    name: string
    description: string
    link: string
}

export type PortfolioProps = {
    project: PortfolioEnrty
    onChange: (field: keyof Omit<PortfolioEnrty, 'id'>, value: string) => void
    onRemove: () => void
}

export type PortfolioFormProps = {
    projects: PortfolioEnrty[]
    onAdd: () => void
    onChange: (id: string, field: keyof Omit<PortfolioEnrty, 'id'>, value: string) => void
    onRemove: (id: string) => void
}