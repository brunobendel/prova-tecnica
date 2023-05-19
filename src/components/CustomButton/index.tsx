import * as S from './styles';

interface IButton {
  action: () => void;
  label: string;
  color: 'AZUL' | 'AMARELO' | 'VERMELHO';
  size: 'sm' | 'md' | 'lg'
}

const CustomButton = ({action, label, color, size}: IButton) => {
return (
  <S.StyledButton variant={color === 'AZUL'? 'primary' : (color === 'AMARELO'? 'warning' : 'danger')} onClick={action} size={size}>{label}</S.StyledButton>
  )
}

export default CustomButton
