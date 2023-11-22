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


function wrapPromise(promise) {
  let status = 'pending'
  let response

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    },
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

export const fetchData = (url) => {
  const promise = fetch(url)
    .then((res) => res.json())

  return wrapPromise(promise)
}

