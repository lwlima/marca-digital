interface Props {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionEyebrow({ children, dark = false, className = '' }: Props) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? 'text-brand-300' : 'text-brand-600'
      } ${className}`}
    >
      {children}
    </p>
  );
}
