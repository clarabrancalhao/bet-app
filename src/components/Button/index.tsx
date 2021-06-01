import React, { FC } from 'react';
import { StyledButton } from './styles';

const Button: FC<any> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      className={props.className}
      color={props.color}
      name={props.name}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
