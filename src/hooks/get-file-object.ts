import { convertImageNameToFile } from '@/helpers/convertImageNameToFile'
import { useEffect, useState } from 'react'

const GetFileObject = (imageUrl: string) => {
    const [file, setFile] = useState<File | null>(null)
    useEffect(() => {
        const handleFile = async () => {
            const fileObject = await convertImageNameToFile(imageUrl)
            setFile(fileObject)
        }
        handleFile()
    }, [imageUrl])
    return file
}

export default GetFileObject
