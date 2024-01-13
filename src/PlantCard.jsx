import { getImagePath } from "./utils";
import './PlantCard.css';
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";

const PlantCard = ({ plant, openModalClbck }) => {
  return (
    <div className="plant-card" onClick={
      () => {
        //openModalClbck(plant.key)
      }


    } >

      <div className="plantImage">
        <div className="plant-title">{plant.plantName}</div>
        <Carousel>

          <img
            src={getImagePath(plant.plantName)}
            //src={rubberPlant}
            width={500}
            height={500}
            alt=""
          />

          <img
            src={getImagePath("Croton")}
            //src={rubberPlant}
            width={500}
            height={500}
            alt=""
          />
          <img
            src={getImagePath("Ajwian")}
            //src={rubberPlant}
            width={500}
            height={500}
            alt=""
          />

        </Carousel>
      </div>
      <div className="plant-detail">
        <p>{plant.description}</p>
      </div>
      {/* <PlantActions id={id} /> */}
    </div >
  );
};

export default PlantCard;
