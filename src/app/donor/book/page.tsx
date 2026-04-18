// app/donor/book/page.tsx
import dynamic from 'next/dynamic'

// Completely disable SSR for this page
const BookAppointmentContent = dynamic(
  () => import('./BookAppointmentContent'),
  { ssr: false }
)

export default function BookAppointmentPage() {
  return <BookAppointmentContent />
}