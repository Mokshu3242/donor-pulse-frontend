import dynamic from 'next/dynamic'

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
  return <BookAppointmentContent />
}