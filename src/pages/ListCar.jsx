import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeaderAdmin from "../components/HeaderAdmin";
import { fetchCar, fetchCarId, turnOffAlert } from "../redux/actions/carAction";
import Chart from "../components/Chart";
import { useDispatch, useSelector } from "react-redux";
import Carcard from "../components/Carcard";
import Link from "next/link";
function ListCar() {
  const [showDetailCar, setShowDetailCar] = useState(false);

  const dispatch = useDispatch();
  const { carData } = useSelector((state) => state.carReducer);
  const { carId } = useSelector((state) => state.carReducer);
  const { searching } = useSelector((state) => state.searchReducer);
  const { showAlert } = useSelector((state) => state.carReducer);

  useEffect(() => {
    dispatch(fetchCar());
    const timeId = setTimeout(() => {
      dispatch(turnOffAlert());
    }, 3000);
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <Sidebar />
      <div className="alert">
        {showAlert ? (
          <h1 className="text-center bg-green-500 w-full">
            Data berhasil ditambah
          </h1>
        ) : null}
      </div>
      <h1 className="text-center font-bold text-xl">Mobil Terlaris</h1>
      <div className="chart-container  flex items-center justify-center">
        <Chart />
      </div>
      <div className="ml-20 content-container flex justify-between ">
        <div className="">
          <h1 className="font-bold">List Cars</h1>
          <ul className="flex items-center">
            <li>
              <button className="text-blue-300 border-2 border-black p-1 mx-3">
                All
              </button>
            </li>
            <li>
              <button className="text-blue-300 border-2 border-black p-1 mx-3">
                Small
              </button>
            </li>
            <li>
              <button className="text-blue-300 border-2 border-black p-1 mx-3">
                Medium
              </button>
            </li>
            <li>
              <button className="text-blue-300 border-2 border-black p-1 mx-3">
                Large
              </button>
            </li>
          </ul>
        </div>
        <Link href="/AddCar" as="/AddCar">
          <div className="tombol-add-car mx-5 px-4 flex items-center text-white justify-center border-2 bg-blue-800">
            + add new car
          </div>
        </Link>
      </div>
      <div className="flex justify-center flex-wrap items-center sm:flex-row flex-col sm:pt-24">
        {carData.map((data) => {
          return (
            <div className="card-container ">
              <Carcard
                id={data.id}
                startRent={data.start_rent_at}
                name={data.name}
                image={data.image}
                price={data.price}
                status={data.status}
                passenger={data.passenger}
                engine={data.engine}
                year={data.year}
                detailCar={(e) => {
                  e.preventDefault();
                  dispatch(fetchCarId(data.id));
                  setShowDetailCar(true);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListCar;
