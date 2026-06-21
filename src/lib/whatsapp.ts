export function getWhatsAppUrl(number: string, message: string): string {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${number}?${params.toString()}`;
}
