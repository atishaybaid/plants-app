import rubberPlant from "./assests/rubberPlant.jpeg";
import crotonPlant from "./assests/crotonPlant.jpeg";
import arecaPalm from "./assests/arecaPalm.jpeg";
import grass from "./assests/grass.jpeg";
import ajvian from "./assests/ajwain.jpg";
import tusli from "./assests/holyBasil.jpeg";
// icons

import leftArrow from "./assests/left-arrow.png";
import rightArrow from "./assests/right-arrow.png"

export const getImagePath = (plantName = "") => {
  switch (plantName) {
    case "Rubber Plant": {
      return rubberPlant;
    }
    case "Croton": {
      return crotonPlant;
    }
    case "Areca Palm": {
      return arecaPalm;
    }
    case "Grass": {
      return grass;
    }
    case "Ajwian": {
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


export const getIcons = (iconName = "") => {
  switch (iconName) {
    case "left-arrow": {
      return leftArrow;

    }

    case "right-arrow": {
      return rightArrow;

    }
  }

}
