import Link from "next/link"

interface BreadcrumbProps {
  items: { href?: string; label: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && <span>/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-rose-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
