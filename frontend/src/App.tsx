import { useCallback } from "react";

import { useAppDispatch } from './app/hooks';
import { toggleModal } from './features/global/globalSlice';
import { useGetBalanceQuery } from "./features/balance/balanceApi";
import BasicModal from "./components/Modal";
import './App.css';
import { Button } from "@mui/material";


function App() {
  const { data, isFetching } = useGetBalanceQuery();
  const dispatch = useAppDispatch();

  const handleOpen = () => dispatch(toggleModal(true));

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "70px" }}
      >{(!isFetching && data) ? data.balance : "0"}<sup style={{ fontSize: "30px", color: "gray" }}>$</sup></h1>
      <Button color={"success"} variant="contained" size={"large"} onClick={handleOpen}>Recharge / Add Balance</Button>
      <BasicModal />
    </>
  );
}

export default App;
