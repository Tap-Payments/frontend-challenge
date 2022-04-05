import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FormProvider, Resolver } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import * as yup from "yup";

import CardName from "./form/CardName";
import CardNumber from "./form/CardNumber";
import CardExpiration from "./form/CardExpiration";
import CardCVV from "./form/CardCVV";
import styles from './CardForm.module.css';
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { usePostBalanceMutation } from "../features/balance/balanceApi";
import { setCreditCardState, toogleShowSuccess, toggleModal } from "../features/global/globalSlice";
import { CreditCard, ServerResponse } from "../types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { yupResolver } = require('@hookform/resolvers/yup');

export interface FormData extends CreditCard { }

const schema = yup.object({
  cardName: yup.string().required(),
  cardNumber: yup.string().required().min(16),
  cardType: yup.string().required(),
  expiration: yup.string().required().min(5),
  cvv: yup.string().required().min(3),
});
const resolver: Resolver<FormData> = yupResolver(schema);

export default function CardForm() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [postBalance] = usePostBalanceMutation();

  const methods = useForm<FormData>({
    resolver,
    mode: "onChange",
    reValidateMode: "onChange"
  });


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)
    // loading button
    setIsLoading(true);
    // if valid -> dispatch action
    if (methods.formState.isValid) {
      dispatch(setCreditCardState(data));
      const res = await postBalance(10).unwrap();

      console.log('postedSuccessfully:', res);

      if (res && res?.status === "success") {
        dispatch(toogleShowSuccess(true));
        // close modal after success
        setTimeout(() => {
          dispatch(toggleModal(false));
          // reset form to use if modal opened again
          dispatch(toogleShowSuccess(false));
        }, 20000);
      }
    }
  };


  return (
    <FormProvider {...methods}>
      <form className={styles.form} noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <CardName sx={{ flex: 1.5 }} control={methods.control} />
        <CardNumber sx={{ flex: 2 }} control={methods.control} />
        <div className={styles.inline}>
          <CardExpiration control={methods.control} />
          <CardCVV control={methods.control} />
        </div>
        <LoadingButton
          fullWidth
          size="large"
          color={"success"}
          variant="contained"
          type={"submit"}
          loading={isLoading}
          disabled={!methods.formState.isValid}
        >Charge 10$</LoadingButton>
      </form>
    </FormProvider>
  )
}
