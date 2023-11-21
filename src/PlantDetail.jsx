import { useEffect, useState } from "react";
import { fetchData } from "./Services/fetchData";


const PlantDetail = ({ apiKey }) => {
    const [plantDetailData, setPlantData] = useState({});
    console.log("apiKey");
    console.log(apiKey);
    useEffect(() => {
        fetchData(
            `https://my-json-server.typicode.com/atishaybaid/dummyApi/${apiKey}`
        )
            .then((data) => {
                setPlantData(data);

            })
            .catch((error) => {
                console.error("Error appeared while getting the data");
            });
    })


    return (<>




    </>)


}


export default PlantDetail;