// shared/ui/Button.tsx
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",         // ← default to "button", not "submit"
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], size !== "md" ? styles[size] : "", className]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...rest} />;
}