import { useState, useEffect, memo, } from 'react';
import InputMask from "react-input-mask";
import { Control, Controller, useFormContext } from "react-hook-form";


import { StringUtils } from "../../utils/string";
import StyledInput from "./StyledInput";
import { CreditCard } from "../../types";


interface CardCVVProps {
  control?: Control<CreditCard, object>;
  [key: string]: any;
};

const CardCVV: React.FC<CardCVVProps> = ({ control, ...props }) => {
  const [helperTxt, setHelperTxt] = useState('Three numbers on card back');

  return (
    <>
      <Controller
        control={control}
        name="cvv"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <InputMask
            mask="999"
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
              label="CVV"
              name={"cvv"}
              variant="outlined"
              inputProps={{
                autoComplete: 'off',
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

CardCVV.defaultProps = {

}
export default memo(CardCVV);

