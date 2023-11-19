import { useEffect, useState } from "react"


const PlantDetail = ({ apiKey:""}) => {
    const [plantDetailData, setPlantData] = useState({});
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