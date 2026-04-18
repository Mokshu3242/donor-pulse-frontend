// app/donor/appointment/[token]/page.tsx
import { Suspense } from 'react'
import AppointmentReceiptContent from './AppointmentReceiptContent'

export default function AppointmentReceiptPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    }>
      <AppointmentReceiptContent />
    </Suspense>
  )
}