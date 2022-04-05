import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreditCard, CreditCardName, GlobalState } from "../../types";


const initialState: GlobalState = {
  modal: {
    isOpen: false,
  },
  form: {
    showSuccess: false,
    creditCard: {
      cardName: '',
      cardNumber: '',
      cardType: '',
      expiration: '',
      cvv: '',
    }
  }
};

const globalSlice = createSlice({
  name: 'globalstate',
  initialState,
  reducers: {
    toggleModal(state, action: PayloadAction<boolean>) {
      state.modal.isOpen = action.payload;
    },
    toogleShowSuccess(state, action: PayloadAction<boolean>) {
      state.form.showSuccess = action.payload;
    },
    setCreditCardState(state, action: PayloadAction<CreditCard>) {
      state.form.creditCard = action.payload;
    },
  },
});


export const { toggleModal, toogleShowSuccess, setCreditCardState } = globalSlice.actions;
export default globalSlice.reducer;

