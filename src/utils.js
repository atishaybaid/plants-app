import rubberPlant from "./assests/rubberPlant.jpeg";
import crotonPlant from "./assests/crotonPlant.jpeg";
import arecaPalm from "./assests/arecaPalm.jpeg";
import grass from "./assests/grass.jpeg";
import ajvian from "./assests/ajwain.jpg";
import tusli from "./assests/holyBasil.jpeg";

export const getImagePath = (plantName = "") => {
  switch (plantName) {
    case "Rubber Plant": {
      return rubberPlant;
    }
    case "Croton": {
      return crotonPlant;
    }
    case "Arica Palm": {
      return arecaPalm;
    }
    case "Grass": {
      return grass;
    }
    case "Ajvian": {
      return ajvian;
    }
    case "Tulsi": {
      return tusli;
    }

    default: {
      return "";
    }
  }
};
