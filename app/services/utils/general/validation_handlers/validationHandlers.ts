export const handleValidation = (
  event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  requiredMessage: string,
) => {
  const input = event.target as HTMLInputElement
  input.setCustomValidity(requiredMessage)
}

export const handleInput = (
  event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
) => {
  const input = event.target as HTMLInputElement
  input.setCustomValidity("")
}
