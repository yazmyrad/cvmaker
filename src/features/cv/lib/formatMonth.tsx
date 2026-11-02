const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

export function formatMonth(ym: string): string {
  if (!ym) return "";

  const [year, month] = ym.split("-");
  if (!year || !month) return ym; 
  const m = Number(month);
  if (!Number.isInteger(m) || m < 1 || m > 12) return ym;

  return `${MONTHS[m - 1]} ${year}`;
}