import { useEffect, useState } from "react";
import { fetchData } from "./Services/fetchData";
import PlantCard from "./PlantCard";
import PlantDetail from "./PlantDetail";
import Modal from 'react-modal';

const PlantList = () => {
  const [plantListData, setPlantListData] = useState([]);
  const [plantListIsLoading, setPlantListIsLoading] = useState(false);
  const [isDetailsModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedPlant, setSelectedPLant] = useState("");

  useEffect(() => {
    setPlantListIsLoading(true)
    fetchData(
      "https://my-json-server.typicode.com/atishaybaid/dummyApi/plantsList"
    )
      .then((data) => {

        setPlantListData(data);
        setPlantListIsLoading(false)
      })
      .catch((error) => {
        console.error("Error appeared while getting the data");
        setPlantListIsLoading(false)
      });
  }, []);

  const closeModal = () => {
    setIsDetailModalOpen(false);
  }

  const renderDetailsModal = () => {
    return (
      <Modal
        isOpen={isDetailsModalOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >

        <PlantDetail apiKey={selectedPlant} />

      </Modal>
    )
  }
  const openModal = (apiKey) => {

    setSelectedPLant(apiKey);
    setIsDetailModalOpen(true);

  }



  const renderPlantList = () => {
    return (
      <ul>
        {plantListData.map((plant) => (
          <PlantCard plant={plant} key={plant.id} openModalClbck={openModal} />

        ))}
      </ul>
    );
  };

  return <div>{renderPlantList()}
    {isDetailsModalOpen ? renderDetailsModal() : null}

  </div>;
};

export default PlantList;
