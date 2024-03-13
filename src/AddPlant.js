import FormInput from "./components/FormInput"
import Button from "./components/Button";
import FileUpload from "./components/FileInput";
import Select from "./components/Select";
import { useRef, memo } from "react";

const AddPlant = ({ }) => {
    const plantNameRef = useRef(null);
    const wateringNotificationRef = useRef(false);
    const caringNotificationRef = useRef(false);
    const plantImageFileUploadRef = useRef(false);

    const additionalPlantFamilies = [
        { label: "Malvaceae", value: "Malvaceae" },
        { label: "Cyperaceae", value: "Cyperaceae" },
        { label: "Arecaceae", value: "Arecaceae" },
        { label: "Boraginaceae", value: "Boraginaceae" },
        { label: "Campanulaceae", value: "Campanulaceae" },
        { label: "Crassulaceae", value: "Crassulaceae" },
        { label: "Cyperaceae", value: "Cyperaceae" },
        { label: "Euphorbiaceae", value: "Euphorbiaceae" },
        { label: "Gentianaceae", value: "Gentianaceae" },
        { label: "Iridaceae", value: "Iridaceae" },
        { label: "Juncaceae", value: "Juncaceae" },
        { label: "Lythraceae", value: "Lythraceae" },
        { label: "Magnoliaceae", value: "Magnoliaceae" },
        { label: "Melastomataceae", value: "Melastomataceae" },
        { label: "Moraceae", value: "Moraceae" },
        { label: "Myristicaceae", value: "Myristicaceae" },
        { label: "Oleaceae", value: "Oleaceae" },
        { label: "Onagraceae", value: "Onagraceae" },
        { label: "Oxalidaceae", value: "Oxalidaceae" },
        { label: "Piperaceae", value: "Piperaceae" },
        { label: "Plantaginaceae", value: "Plantaginaceae" },
        { label: "Polygonaceae", value: "Polygonaceae" },
        { label: "Primulaceae", value: "Primulaceae" },
        { label: "Ranunculaceae", value: "Ranunculaceae" },
        { label: "Sapindaceae", value: "Sapindaceae" },
        { label: "Scrophulariaceae", value: "Scrophulariaceae" },
        { label: "Theaceae", value: "Theaceae" },
        { label: "Verbenaceae", value: "Verbenaceae" },
        { label: "Violaceae", value: "Violaceae" },
        { label: "Amaranthaceae", value: "Amaranthaceae" },
        { label: "Asphodelaceae", value: "Asphodelaceae" },
        { label: "Balsaminaceae", value: "Balsaminaceae" },
        { label: "Caryophyllaceae", value: "Caryophyllaceae" },
        { label: "Clusiaceae", value: "Clusiaceae" },
        { label: "Droseraceae", value: "Droseraceae" },
        { label: "Elaeagnaceae", value: "Elaeagnaceae" },
        { label: "Ginkgoaceae", value: "Ginkgoaceae" },
        { label: "Haloragaceae", value: "Haloragaceae" },
        { label: "Juglandaceae", value: "Juglandaceae" },
        { label: "Malpighiaceae", value: "Malpighiaceae" },
        { label: "Meliaceae", value: "Meliaceae" },
        { label: "Menispermaceae", value: "Menispermaceae" },
        { label: "Rhamnaceae", value: "Rhamnaceae" },
        { label: "Rosaceae", value: "Rosaceae" },
        { label: "Salicaceae", value: "Salicaceae" },
        { label: "Thymelaeaceae", value: "Thymelaeaceae" },
        { label: "Typhaceae", value: "Typhaceae" },
        { label: "Urticaceae", value: "Urticaceae" },
        { label: "Zingiberaceae", value: "Zingiberaceae" }
    ];

    const dummyOptions = [
        { label: "Rosaceae", value: "Rosaceae" },
        { label: "Lamiaceae", value: "Lamiaceae" },
        { label: "Fabaceae", value: "Fabaceae" },
        { label: "Asteraceae", value: "Asteraceae" },
        { label: "Poaceae", value: "Poaceae" },
        { label: "Orchidaceae", value: "Orchidaceae" },
        { label: "Solanaceae", value: "Solanaceae" },
        { label: "Cactaceae", value: "Cactaceae" },
        { label: "Brassicaceae", value: "Brassicaceae" },
        { label: "Ericaceae", value: "Ericaceae" },
        { label: "Liliaceae", value: "Liliaceae" },
        { label: "Rutaceae", value: "Rutaceae" },
        { label: "Cyperaceae", value: "Cyperaceae" },
        { label: "Apiaceae", value: "Apiaceae" },
        { label: "Myrtaceae", value: "Myrtaceae" },
        { label: "Gesneriaceae", value: "Gesneriaceae" },
        { label: "Bromeliaceae", value: "Bromeliaceae" },
        { label: "Araceae", value: "Araceae" },
        { label: "Fagaceae", value: "Fagaceae" },
        { label: "Cucurbitaceae", value: "Cucurbitaceae" },
        ...additionalPlantFamilies
    ]





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
        <Select options={dummyOptions} placeholder="Select Plant Family" />
        <Button label="Save Plant" onClick={onClickAddPlant} ></Button>
    </form>

    )

}



export default memo(AddPlant);