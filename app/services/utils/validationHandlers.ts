export const handleValidation = (event: React.FormEvent<HTMLInputElement>, requiredMessage: string) => {
    const input = event.target as HTMLInputElement
    input.setCustomValidity(requiredMessage)
}

export const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    input.setCustomValidity("")
}