import { ButtonElement } from "./style";

const Button = ({ title, color, size, onClick }) => {
    return (
        <ButtonElement buttonColor={color} buttonSize={size} onClick={onClick} type="button">
            {title}
        </ButtonElement>
    );
};

export default Button;
