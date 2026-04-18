// frontend\src\app\donor\book\page.tsx
import { Suspense } from 'react'
import BookAppointmentContent from './BookAppointmentContent'

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    }>
      <BookAppointmentContent />
    </Suspense>
  )
}