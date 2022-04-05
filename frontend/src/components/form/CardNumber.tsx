import { useState, useEffect, memo, } from 'react';
import InputMask from "react-input-mask";
import { Control, Controller, useFormContext } from "react-hook-form";

import { CreditCard } from "../../types";
import { StringUtils } from "../../utils/string";
import StyledInput from "./StyledInput";


interface CardNumberProps {
  control?: Control<CreditCard, object>;
  [key: string]: any;
};
const CardNumber: React.FC<CardNumberProps> = ({ control, ...props }) => {
  const [helperTxt, setHelperTxt] = useState('');
  const { setValue } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <InputMask
            mask="9999 9999 9999 9999"
            alwaysShowMask={true}
            maskPlaceholder={""}
            value={value}
            onChange={(e) => {
              const val = StringUtils.removeSpaces(e.target.value);
              const res = StringUtils.creditCardNameValidate(val);
              onChange(val);
              if (!res.isValid) {
                setHelperTxt('Incorrect Card Number.');
              }
              if (res.isValid) {
                setHelperTxt(`card type: ${res.CardType} ✅`);
                setValue('cardType', res.CardType);
              }

            }}
          >
            <StyledInput
              {...props}
              error={invalid}
              type={"tel"}
              name={"cardNumber"}
              label="Card Number"
              variant="outlined"
              helperText={helperTxt}
              inputProps={{
                autoComplete: 'cc-number',
                inputMode: 'numeric',
                pattern: '[0-9]*'
              }}
            />
          </InputMask>
        )}
      />
    </>
  );
};

CardNumber.defaultProps = {

}
export default memo(CardNumber);

