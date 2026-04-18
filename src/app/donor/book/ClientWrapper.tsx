// app/donor/book/ClientWrapper.tsx
'use client'

import { useEffect, useState } from 'react'
import BookAppointmentContent from './BookAppointmentContent'

export default function ClientWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return <BookAppointmentContent />
}