import { useEffect, useState } from "react";
import { fetchData } from "./Services/fetchData";
import PlantCard from "./PlantCard";

const PlantList = () => {
  const [plantListData, setPlantListData] = useState([]);
  useEffect(() => {
    fetchData(
      "https://my-json-server.typicode.com/atishaybaid/dummyApi/plantsList"
    )
      .then((data) => {
        console.log("data");
        setPlantListData(data);
      })
      .catch((error) => {
        console.error("Error appeared while getting the data");
      });
  }, []);
  const renderPlantList = () => {
    return (
      <ul>
        {plantListData.map((plant) => (
          <PlantCard plant={plant} key={plant.id} />
        
        ))}
      </ul>
    );
  };

  return <div>{renderPlantList()}</div>;
};

export default PlantList;
