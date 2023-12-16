import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuranDetail, quranSelector } from '../slice/QuranSlice';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { nomor } = useParams();
  const dispatch = useDispatch();
  const quranDetail = useSelector((state) => quranSelector.selectById(state, nomor));

  useEffect(() => {
    dispatch(getQuranDetail(nomor));
  }, [dispatch, nomor]);

  console.log(quranDetail);

  return (
    <div className="relative bg-blue-600 min-h-screen">
      {/* Render informasi detail quran */}
      {quranDetail && (
        <>
          <span className="flex justify-between w-5/6 mx-auto py-5 ">
            <p className="bg-white px-2 text-3xl rounded-xl">{quranDetail.nama}</p>
            <p className="bg-white px-2 text-3xl rounded-full">{quranDetail.nomor}</p>
            <p className="bg-white px-2 text-3xl rounded-xl">{quranDetail.namaLatin}</p>
          </span>

          {quranDetail.ayat ? (
            <ul className="bg-white w-5/6 mx-auto p-4 rounded-xl">
              {quranDetail.ayat.map((item) => (
                <div key={item.nomorAyat.toString()} className="mb-10">
                  <li className="flex justify-end text-2xl mb-2">{item.teksArab}</li>
                  <li>{item.teksIndonesia}</li>
                </div>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
};

export default Detail;
