export default function formatDate(date) {
  const dateToFormat = new Date(date)
  const formattedDate = dateToFormat.toLocaleDateString('pt-br', {
    hour: 'numeric',
    minute: 'numeric',
  })
  return formattedDate
}
