// app/donor/appointment/[token]/page.tsx
import dynamic from 'next/dynamic'

const AppointmentReceiptContent = dynamic(
  () => import('./AppointmentReceiptContent'),
  { ssr: false }
)

export default function AppointmentReceiptPage() {
  return <AppointmentReceiptContent />
}