// src/app/donor/layout.tsx
export const dynamic = 'force-dynamic'
export const dynamicParams = false
export const revalidate = 0

export default function DonorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}