export function truncate(text: string, length: number) {
  return text?.length > length ? `${text.substring(0, length * 0.7)}...` : text
}
