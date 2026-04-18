// app/donor/book/page.tsx
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the component with SSR disabled
const BookAppointmentContent = dynamic(
  () => import('./BookAppointmentContent'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }
)

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    }>
      <BookAppointmentContent />
    </Suspense>
  )
}