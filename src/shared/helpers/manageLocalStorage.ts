export const setToLocalStorage = (key: string, value: unknown) => {
    const newValue = typeof value !== 'string' ? JSON.stringify(value) : value
    localStorage.setItem(key, newValue)
}

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}