export const convertImageNameToFile = async (imageUrl: string) => {
    const folderName = imageUrl.split('/')[8];
    const folderMemeType = folderName.split('.')[1];
    const response = await fetch(imageUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch image.');
    }
    const blob = await response.blob();
    const file = new File([blob], folderName, { type: `image/${folderMemeType}` });

    return file
}