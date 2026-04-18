// app/hospital/requests/[id]/page.tsx
import { Suspense } from 'react'
import RequestDetailsContent from './RequestDetailsContent'

export default function RequestDetailsPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <RequestDetailsContent />
    </Suspense>
  )
}