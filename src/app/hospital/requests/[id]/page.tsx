// app/hospital/requests/[id]/page.tsx
import dynamic from 'next/dynamic'

const RequestDetailsContent = dynamic(
  () => import('./RequestDetailsContent'),
  { ssr: false }
)

export default function RequestDetailsPage() {
  return <RequestDetailsContent />
}