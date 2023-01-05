import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  alert(`${state.error} `);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.contactList = payload;
      })

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.contactList.push(payload);
      })

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.contactList = state.contactList.filter(
          ({ id }) => id !== payload
        );
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
