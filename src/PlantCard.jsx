import { getImagePath } from "./utils";


const PlantCard = ({ plant }) => {
  return (
    <div>
      <div className="plantImage">
        <img
          src={getImagePath(plant.plantName)}
          //src={rubberPlant}
          width={500}
          height={500}
         alt=""
        />
      </div>
      {/* <PlantActions id={id} /> */}
      <div className="plantDetail">{plant.plantName}</div>
    </div>
  );
};

export default PlantCard;
