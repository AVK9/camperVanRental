import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setTokenApi } from "services/authApi";
import { getAllAdvertsApi } from '../../services/advertsApi';

export const getAdvertsThunk = createAsyncThunk(
  'adverts/getAdverts',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllAdvertsApi();
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
// export const addContactThunk = createAsyncThunk(
//     'contacts/addContacts',
//     async (contact, { rejectWithValue}) => {
//         try {
//     const data = await addContactApi(contact);

//       return data;

//         } catch (error) {
//             return rejectWithValue(error.response.data.error)
//         }
//     }
// );

// export const delContactThunk = createAsyncThunk(
//     'contacts/delContacts',
//     async (delId, { rejectWithValue}) => {
//         try {
//     const data = await delContactApi(delId);
//       return data;

//         } catch (error) {
//             return rejectWithValue(error.response.data.error)
//         }
//     }
// );
