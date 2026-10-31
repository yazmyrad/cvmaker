import { useState } from "react";

export function useEntityList<T extends { id: string }>(
  createEmpty: () => Omit<T, "id">
) {
  const [items, setItems] = useState<T[]>([]);
  const add = () => setItems(prev => [...prev, { id: crypto.randomUUID(), ...createEmpty() } as T]);
  const update = (id: string, field: keyof Omit<T, "id">, value: string) =>
    setItems(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e));
  const remove = (id: string) => setItems(prev => prev.filter(e => e.id !== id));
  return { items, add, update, remove };
}