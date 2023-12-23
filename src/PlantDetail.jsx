import { useEffect, useState } from "react";
import { fetchData } from "./Services/fetchData";
import './PlantCard.css';



const PlantDetail = ({ apiKey }) => {
    const [plantDetailData, setPlantData] = useState({});
    console.log("apiKey");
    console.log(apiKey);
    useEffect(() => {
        fetchData(
            `https://demo0778073.mockable.io/${apiKey}`
        )
            .then((data) => {
                setPlantData(data);

            })
            .catch((error) => {
                console.error("Error appeared while getting the data");
            });
    }, [])

    const { species_detail: speciesDetail, caring_tips: caringTips, watering_frequency: wateringFrequency, common_reasons_for_failure: commonReasonsForFailure, common_name = "" } = plantDetailData;
    return (<div className="container">
        <h1>{common_name} Details</h1>
        <div className="details">
            <h2>Species Detail</h2>
            <p>Scientific Name: {speciesDetail?.scientific_name}</p>
            <p>Native To: {speciesDetail?.native_to}</p>
            <p>Family: {speciesDetail?.family}</p>
        </div>
        <div className="details">
            <h2>Caring Tips</h2>
            {caringTips ? <ul>
                {Object.keys(caringTips).map((tip, index) => (
                    <li key={index}>
                        {tip.charAt(0).toUpperCase() + tip.slice(1)}: {caringTips?.[tip]}
                    </li>
                ))}
            </ul> : null}
        </div>
        <div className="details">
            <h2>Watering Frequency</h2>
            <p>Guidelines: {wateringFrequency?.guidelines}</p>
            <p>Frequency: {wateringFrequency?.frequency}</p>
        </div>
        <div className="details">
            <h2>Common Reasons for Failure</h2>
            {commonReasonsForFailure ?
                <ul>
                    {commonReasonsForFailure?.map((reason, index) => (
                        <li key={index}>{reason}</li>
                    ))}
                </ul> : null}
        </div>
    </div>



    )


}


export default PlantDetail;