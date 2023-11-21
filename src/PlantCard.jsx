import { getImagePath } from "./utils";
import './PlantCard.css';

const PlantCard = ({ plant, openModalClbck }) => {
  return (
    <div className="plant-card" onClick={
      () => {
        openModalClbck(plant.key)
      }


    } >

      <div className="plantImage">
        <div className="plant-title">{plant.plantName}</div>
        <img
          src={getImagePath(plant.plantName)}
          //src={rubberPlant}
          width={500}
          height={500}
          alt=""
        />
      </div>
      <div className="plant-detail">
        <p>{plant.description}</p>
      </div>
      {/* <PlantActions id={id} /> */}
    </div >
  );
};

export default PlantCard;
