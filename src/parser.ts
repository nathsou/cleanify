export function parse(source: string): string[] {
    return source
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== '' && !line.startsWith('#'));
}