import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time className="block text-xs text-gray-600" dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
