import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  return (
    <ButtonContainer>
      <button onClick={onClick} disabled={!isValid}>
        {title}
      </button>
    </ButtonContainer>
  );
};

export default Button;
