import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function AddModelPage() {
    const [file, setFile] = useState<File | null>(null);
    const acceptableTypes = ["assetbundle", "png"];
    const [hasTypeError, setHasTypeError] = useState<boolean>(false);

    return (
        <div>
            {hasTypeError && <p>Неверное разрешение файла</p>}
            <FileUploader
                handleChange={(x: File) => {
                    setFile(x);
                    setHasTypeError(false);
                }}
                types={acceptableTypes}
                onTypeError={() => setHasTypeError(true)}
            />
            <p>{file?.name}</p>
        </div>
    );
}
