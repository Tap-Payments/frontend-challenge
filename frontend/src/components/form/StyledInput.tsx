
import { styled, TextField, TextFieldProps } from "@mui/material";
import { useState, useEffect, memo } from 'react';


const CssTextField = styled(TextField)({
  '& label.MuiInputLabel-root': {
    fontSize: "16px",
  },
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray !important',
    },
    '&:hover fieldset': {
      borderColor: 'gray-400 !important',
    },
    '&.Mui-error fieldset': {
      borderColor: 'var(--error) !important',
    },    
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary) !important',
    },

  },
});


const StyledInput: React.FC<TextFieldProps> = ({ ...props }) => {

  return (
    <CssTextField
      {...props}
      size={"medium"}
      variant="outlined"
    />
  );
};

StyledInput.defaultProps = {

}
export default memo(StyledInput);