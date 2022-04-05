import { useCallback, useState } from "react";
import { IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleModal } from '../features/global/globalSlice';
import CardForm from './CardForm';
import { useGetBalanceQuery } from "../features/balance/balanceApi";
import styles from './Modal.module.css';
//
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const modalState = useAppSelector((state) => state.global.modal);
  const showSuccess = useAppSelector((state) => state.global.form.showSuccess);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetBalanceQuery();


  const handleClose = () => dispatch(toggleModal(false));
  return (
    <>
      <Modal

        open={modalState.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-add-balance"
        aria-describedby="modal-add-balance"
      >
        <Box sx={style} className={styles.modal}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2>{(!isFetching && data) ? data.balance : "0"}<sup style={{ color: "gray", fontSize: "15px" }}>$</sup></h2>
            <IconButton aria-label="close" onClick={handleClose} >
              <CloseIcon />
            </IconButton>
          </Box>
          <br />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            {showSuccess ? (
              <>
                <CheckIcon sx={{ fontSize: "200px", color: "green", border: "5px solid green", borderRadius: "50%" }} />
                <p>Balance Recharged successfully</p>
                <small>Modal will close automatically after 20s</small>
              </>
            ) : (
              <CardForm />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
