// app/donor/update/[token]/UpdateContent.tsx
'use client'

import { useParams } from 'next/navigation'
import { DonorProfileUpdateForm } from '@/components/donor/DonorProfileUpdateForm'

export default function UpdateContent() {
  const params = useParams()
  const token = params.token as string
  
  return <DonorProfileUpdateForm token={token} />
}