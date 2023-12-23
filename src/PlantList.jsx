import { useEffect, useState } from "react";
import { fetchData } from "./Services/fetchData";
import PlantCard from "./PlantCard";
import Modal from 'react-modal';

const PlantList = () => {
  const [plantListData, setPlantListData] = useState([]);
  const [plantListIsLoading, setPlantListIsLoading] = useState(false);
  const [isDetailsModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    setPlantListIsLoading(true)
    fetchData(
      "https://my-json-server.typicode.com/atishaybaid/dummyApi/plantsList"
    )
      .then((data) => {
        console.log("data");
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

        <div>I am a modal</div>

      </Modal>
    )
  }
  const openModal = () => {
    setIsDetailModalOpen(true);
  }



  const renderPlantList = () => {
    return (
      <ul onClick={openModal}>
        {plantListData.map((plant) => (
          <PlantCard plant={plant} key={plant.id} />

        ))}
      </ul>
    );
  };

  return <div>{renderPlantList()}
    {renderDetailsModal()}

  </div>;
};

export default PlantList;
