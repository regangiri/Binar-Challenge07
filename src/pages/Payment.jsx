import { useState } from "react";
import Icon from "react-hero-icon";

function Payment() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="flex flex-col items-center font-helvetica justify-center  text-black bg-primary my-6">
      <form className="flex sm:flex-row flex-col text-xs sm:text-sm  bg-white w-full lg:w-3/4 py-3 items-center justify-center border-black rounded-lg">
        <div className="form-child font-light w-full lg:w-3/4 mx-3 flex items-start justify-center flex-col">
          <label htmlFor="tipedriver">Tipe Driver</label>

          <select
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="tipedriver"
            id="tipedriver"
          >
            <option value={true}>Dengan Sopir</option>
            <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="form-child w-full font-light mx-3 flex items-start justify-center flex-col">
          <label htmlFor="tanggal">Tanggal</label>
          <input
            className="w-full border-2 border-[#D0D0D0] text-gray-500 uppercase bg-transparent ring-1 p-2 my-1 ring-white rounded-sm"
            type="date"
            id="tanggal"
            name="tanggal"
          />
        </div>
        <div className="form-child font-light w-full mx-3 flex items-start justify-center flex-col">
          <label
            htmlFor="waktujemput"
            className="text-ellipsis overflow-hidden truncate"
          >
            Waktu Jemput/Ambil
          </label>
          <input
            className="w-full text-gray-500 border-2 border-[#D0D0D0] bg-transparent uppercase ring-1 p-2 my-1 ring-white rounded-sm"
            type="time"
            id="waktujemput"
            name="waktujemput"
          />
        </div>
        <div className="form-child font-light w-full mx-3 flex items-start justify-center flex-col">
          <label
            className="text-ellipsis overflow-hidden truncate"
            htmlFor="jumlahpenumpang"
          >
            Jumlah Penumpang(optional)
          </label>
          <input
            type="number"
            className="w-full bg-transparent border-2 border-[#D0D0D0] ring-1 p-2 my-1 text-gray-500 ring-white rounded-sm"
            name="jumlahpenumpang"
            id="jumlahpenumpang"
          />
        </div>
      </form>
      {!paid ? (
        <div className="bank-detail-container mx-3 flex items-center justify-center flex-col sm:flex-row  w-full">
          <div className="pilih-bank-container w-1/2 shadow-inner ">
            <h3>Pilih Bank Transfer</h3>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
              <div className="bank flex items-center my-10 ">
                <div className="bank-logo py-1 px-3 w-24 mx-3 text-center border-2 border-[#D0D0D0]">
                  BCA
                </div>
                <div className="bank-detail">BCA Transfer</div>
              </div>
              <div className="bank flex items-center my-10 ">
                <div className="bank-logo py-1 px-3 w-24 mx-3 text-center border-2 border-[#D0D0D0]">
                  BNI
                </div>
                <div className="bank-detail">BNI Transfer</div>
              </div>
              <div className="bank flex items-center my-10 ">
                <div className="bank-logo py-1 px-3 w-24 mx-3 text-center border-2 border-[#D0D0D0]">
                  Mandiri
                </div>
                <div className="bank-detail">Mandiri Transfer</div>
              </div>
            </p>
          </div>
          <div className="detail-mobil-payment w-1/2 shadow-inner mx-3">
            <h3 classNmae="font-bold ">Nama/Tipe Mobil</h3>
            <div className="detail-mobil flex ">
              <p className="mx-3">4 orang</p>
              <p className="mx-3">manual</p>
              <p className="mx-3">tahun 2000</p>
            </div>

            <div className="total flex justify-between">
              <h4 className="font-bold">Total</h4>
              <h4>Rp 430.000</h4>
            </div>
            <h3 className="py-5 font-bold">Harga</h3>
            <ul>
              <li className="flex justify-between">
                <p>1 Mobil dengan sopir</p>
                <p>Rp 430.000</p>
              </li>
            </ul>
            <h3 className="my-3 font-bold">Biaya Lainnya</h3>
            <ul>
              <li className="flex justify-between">
                <p className="my-1">Pajak</p>
                <p className="my-1 text-green-300 ">termasuk</p>
              </li>
              <li className="flex justify-between">
                <p className="my-1">Biaya makan dengan sopir</p>
                <p className="my-1 text-green-300 ">termasuk</p>
              </li>
            </ul>
            <h3 className="my-2 font-bold">Belum termasuk</h3>
            <ul>
              <li className="my-1">Bensin</li>
              <li className="my-1">Tol dan Parkir</li>
            </ul>
            <hr className="h-2 text-black bg-black my-6" />
            <div className="total flex justify-between">
              <h3>Total</h3>
              <h3>Rp 430.000</h3>
            </div>
            <button
              onClick={() => setPaid(true)}
              className="w-full bg-green-400 my-5 py-3"
            >
              {" "}
              Bayar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center w-24 h-24">
            <Icon className="w-24 h-24" icon="check" type="solid"></Icon>
          </div>
          <h1>Pembayaran Berhasil</h1>
        </div>
      )}
    </div>
  );
}

export default Payment;
