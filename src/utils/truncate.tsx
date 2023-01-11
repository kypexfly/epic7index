export function truncate(text:string) {
    return text?.length > 220 ? `${text.substring(0, 200)}...` : text;
}