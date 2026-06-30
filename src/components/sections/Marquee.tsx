const ITEMS = [
  "Product Design",
  "Web Development",
  "Brand Identity",
  "Motion Design",
  "UX Research",
  "Design Systems",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-bg-line bg-bg-soft py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl font-semibold text-white/40 transition-colors hover:text-accent md:text-3xl">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
