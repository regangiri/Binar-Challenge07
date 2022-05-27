import axios from "axios";
import Router from "next/router";

export const fetchCarSuccess = (car) => {
  return {
    type: "fetchCarData",
    payload: car,
  };
};

export const fetchCarIdSuccess = (carId) => {
  return {
    type: "fetchCarById",
    payload: carId,
  };
};

export const showAlert = () => {
  return {
    type: "showAlert",
    payload: true,
  };
};

export const turnOffAlert = () => {
  return {
    type: "turnOffAlert",
    payload: false,
  };
};

export const fetchCar = () => {
  return (dispatch) => {
    axios
      .get("https://rent-cars-api.herokuapp.com/admin/car")
      .then((res) => {
        const car = res.data;
        car.forEach((data) => {
          data.passenger = "4 orang";
          data.engine = "Manual";
          data.year = "Tahun 2020";
        });
        dispatch(fetchCarSuccess(car));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCarId = (id) => {
  return (dispatch) => {
    axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        const carId = res.data;

        carId.passenger = "4 orang";
        carId.engine = "Manual";
        carId.year = "Tahun 2020";

        dispatch(fetchCarIdSuccess(carId));
      })
      .catch((err) => console.log(err));
  };
};

export const uploadSuccess = () => {
  return (dispatch) => {
    Router.push("/ListCar");
    console.log("pindah");
    dispatch(showAlert());
  };
};
