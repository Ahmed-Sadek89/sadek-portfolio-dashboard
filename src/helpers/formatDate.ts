export function formatDate(isoString: string): string {
    const date = new Date(isoString);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = monthNames[date.getMonth()]; // Get the month name
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
}