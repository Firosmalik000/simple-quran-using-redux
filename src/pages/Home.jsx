import React, { useEffect, useState } from 'react';
import Card from '../fragment/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getQuran, quranSelector } from '../slice/QuranSlice';
import { Link } from 'react-router-dom';
import Wavify from 'react-wavify';

const Home = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const quran = useSelector(quranSelector.selectAll);

  useEffect(() => {
    dispatch(getQuran());
  }, [dispatch]);

  const searchSurat = quran.filter((surat) => {
    return search.toLowerCase() === '' ? true : surat.namaLatin.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section>
      <div className="w-full">
        <div className="py-[130px] bg-blue-600 w-full h-[500px] relative">
          <h1 className="text-center text-6xl font-sans text-white mb-2">E-Quran </h1>
          <h4 className="text-2xl text-center text-slate-200">Membaca Al - quran dengan mudah dimanapun.</h4>
          <Wavify
            className="absolute bottom-0 left-0 w-full"
            fill="#ffffff"
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 4,
            }}
          />
        </div>
        <div className="w-5/6 mx-auto py-[100px]">
          <input
            type="text"
            className="border border-black hover:border-blue-500 focus:border-blue-500 w-[500px] mx-auto rounded-lg px-3 py-2 mb-5 justify-center flex "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari Surah"
          />
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-1 gap-x-4 md:grid-cols-2 w-[5/6] mb-7 md:gap-y-4 xl gap-y-4">
            {searchSurat &&
              searchSurat.length > 0 &&
              searchSurat.map((item, index) => (
                <div key={index}>
                  <Link to={`/${item.nomor}`}>
                    <Card item={item} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
