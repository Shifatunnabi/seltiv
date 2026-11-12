import Link from 'next/link';

export default function Breadcrumbs({ items, onPaper = false }: { items: { name: string; path: string }[]; onPaper?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${onPaper ? 'text-[#5d6660]' : 'text-muted'}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.path} className="inline-flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path} className="link-u">{item.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
