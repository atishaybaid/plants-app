import { useState, forwardRef } from "react";

const FileUpload = forwardRef((props, ref) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { label = "upload", multi = false, placeholder = "type", name = "fileName" } = props;

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        // Here, you can perform actions with the selected file
        if (selectedFile) {
            // For example, you can upload the file to a server using FormData
            const formData = new FormData();
            formData.append({ name }, selectedFile);

            // Example: Send formData to an API endpoint using fetch or Axios
            // fetch('/api/upload', {
            //   method: 'POST',
            //   body: formData,
            // })
            // .then(response => {
            //   // Handle response
            // })
            // .catch(error => {
            //   // Handle error
            // });

            // Reset the selected file state after upload
            setSelectedFile(null);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} multiple={multi} accept="image/*" name={name} ref={ref} />
            {/* <button onClick={handleUpload}>{label}</button> */}
            {selectedFile && (
                <div>
                    <p>Selected File: {selectedFile.name}</p>
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected Plant"
                        style={{ maxWidth: '300px' }}
                    />
                </div>
            )}
        </div>
    );
});

export default FileUpload;