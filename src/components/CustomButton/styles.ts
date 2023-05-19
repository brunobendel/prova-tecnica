import styled from 'styled-components';
import { Button } from 'react-bootstrap';

interface IStyledButton{
    size: string
}
export const StyledButton = styled(Button)<IStyledButton>`
    width: 100%;
    font-size: 18px;
`