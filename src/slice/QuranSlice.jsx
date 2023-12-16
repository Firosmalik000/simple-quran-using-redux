import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuran = createAsyncThunk('quran/getQuran', async () => {
  const response = await axios.get('https://equran.id/api/v2/surat');
  return response.data.data;
});

export const getQuranDetail = createAsyncThunk('quran/getQuranDetail', async (nomor) => {
  const response = await axios.get(`https://equran.id/api/v2/surat/${nomor}`);
  return response.data.data;
});
const quranEntity = createEntityAdapter({
  selectId: (quran) => quran.nomor,
});

const quranSlice = createSlice({
  name: 'quran',
  initialState: quranEntity.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuran.fulfilled, (state, action) => {
      quranEntity.setAll(state, action.payload);
    });
    builder.addCase(getQuranDetail.fulfilled, (state, action) => {
      quranEntity.setOne(state, action.payload);
    });
  },
});

export const quranSelector = quranEntity.getSelectors((state) => state.quran);

export default quranSlice.reducer;
