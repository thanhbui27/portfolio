interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
}

export function SectionHeader({ title, eyebrow }: SectionHeaderProps) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="mb-2 inline-block rotate-[-1deg] border-2 border-ink bg-banana px-3 py-1 font-mono text-xs font-bold uppercase shadow-retro-sm">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-normal sm:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
