// app/donor/update/[token]/page.tsx
import dynamic from 'next/dynamic'

const UpdateContent = dynamic(
  () => import('./UpdateContent'),
  { ssr: false }
)

export default function UpdatePage() {
  return <UpdateContent />
}