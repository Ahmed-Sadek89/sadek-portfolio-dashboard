export const convertImageNameToFile = async (imageUrl: string) => {
    const folderName = imageUrl.split('/')[8];
    const folderMemeType = folderName.split('.')[1];
    const response = await fetch('https://res.cloudinary.com/dap3fnwtc/image/upload/v1726172187/sadek_portfolio/IMG-1726172184178.webp');
    if (!response.ok) {
        throw new Error('Failed to fetch image.');
    }
    const blob = await response.blob();
    const file = new File([blob], folderName, { type: `image/${folderMemeType}` });

    return file
}