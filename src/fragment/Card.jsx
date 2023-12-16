import React from 'react';

const Card = ({ item }) => {
  return (
    <section className="w-[300px] h-[200px] mx auto border border-slate-300 rounded-xl mx-auto relative bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 traansition duration-150 cursor-pointer">
      <div className="text-center py-10">
        <h1 className="text-3xl">{item.nama}</h1>
        <p>{item.namaLatin}</p>
        <p>({item.arti})</p>
        <p>ayat : {item.jumlahAyat}</p>
      </div>
      <p className="absolute top-2 right-2">{item.nomor}</p>
      <p className="absolute top-2 left-2">{item.tempatTurun}</p>
    </section>
  );
};

export default Card;
