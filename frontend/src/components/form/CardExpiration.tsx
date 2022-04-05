import { useState, useEffect, memo, } from 'react';
import InputMask from "react-input-mask";
import { Control, Controller, useFormContext } from "react-hook-form";

import { StringUtils } from "../../utils/string";
import StyledInput from "./StyledInput";
import { CreditCard } from "../../types";


interface CardExpirationProps {
  control?: Control<CreditCard, object>;
  [key: string]: any;
};
const CardExpiration: React.FC<CardExpirationProps> = ({ control, ...props }) => {
  const [helperTxt, setHelperTxt] = useState('example 12/25');

  return (
    <>
      <Controller
        control={control}
        name="expiration"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <InputMask
            mask="99/99"
            alwaysShowMask={true}
            maskPlaceholder={""}
            value={value}
            onChange={(e) => {
              const val = StringUtils.removeSpaces(e.target.value);
              onChange(val);
            }}
          >
            <StyledInput
              {...props}
              error={invalid}
              helperText={helperTxt}
              type={"tel"}
              name={"expiration"}
              label="Expiration Date"
              variant="outlined"
              inputProps={{
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

CardExpiration.defaultProps = {

}
export default memo(CardExpiration);

