import { useState, useEffect, memo } from 'react';
import { Control, Controller, useFormContext } from "react-hook-form";

import { CreditCard } from "../../types";
import StyledInput from "./StyledInput";


interface CardNameProps {
  control?: Control<CreditCard, object>;
  [key: string]: any;
};
const CardName: React.FC<CardNameProps> = ({ control, ...props }) => {
  const [helperTxt, setHelperTxt] = useState('');

  return (
    <>
      <Controller
        control={control}
        name="cardName"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <StyledInput
            {...props}
            value={value}
            error={invalid}
            label="Card Name"
            variant="outlined"
            helperText={helperTxt}
            onChange={(e) => {
              const value = e.target.value;
              const regex = /^[a-z ]+$/i;
              const isChar = regex.test(value);
              if (value === '' || isChar) {
                onChange(value)
                setHelperTxt('');
              } else {
                setHelperTxt('Only letters are allowed.');
              }
            }}
            inputProps={{
              autoComplete: 'cc-name',
            }}
          />
        )}
      />
    </>
  );
};

CardName.defaultProps = {

}
export default memo(CardName);

