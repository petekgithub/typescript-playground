function toAlternatingCase(str: string): string {
    return str
        .split("")
        .map((char) => char === char.toUpperCase() ? char === char.toLowerCase() : char === char.toUpperCase() )
        .join('')
    
}

export default toAlternatingCase;

