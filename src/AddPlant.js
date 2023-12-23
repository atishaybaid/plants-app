import FormInput from "./components/FormInput"
import Button from "./components/Button";
import FileUpload from "./components/FileInput";
import { useRef } from "react";

const AddPlant = ({ }) => {
    const plantNameRef = useRef(null);
    const wateringNotificationRef = useRef(false);
    const caringNotificationRef = useRef(false);
    const plantImageFileUploadRef = useRef(false);


    const onClickAddPlant = (event) => {
        event.preventDefault();
        const elmReferences = [plantNameRef.current, wateringNotificationRef.current, caringNotificationRef.current];
        let addPlantPostData = {};

        //Read about differt type of loops in javascript

        for (var i = 0; i < elmReferences.length; i++) {
            let currentElm = elmReferences[i];
            let { name, value } = currentElm;

            console.log("onClickAddPlant");
            addPlantPostData[name] = value;
        }



        //@todo:api->call api
        console.log(addPlantPostData);
        console.log(plantImageFileUploadRef.current.files[0])
    }

    //@todo:check for usage of keys here,with multiple form elements present 

    return (<form>
        <FormInput type="text" label="PlantName" name="name" ref={plantNameRef} />
        <FormInput type="checkbox" label="Watering Notification" name="wateringNotification" ref={wateringNotificationRef} />
        <FormInput type="checkbox" label="Caring Notification" name="caringNotification" ref={caringNotificationRef} />
        <FileUpload label="Upload Plant Image" name="plantImage" ref={plantImageFileUploadRef} />
        <Button label="Save Plant" onClick={onClickAddPlant}></Button>
    </form>

    )

}



export default AddPlant;