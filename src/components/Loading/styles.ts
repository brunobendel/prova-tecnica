import styled from "styled-components";
import { Spinner } from "react-bootstrap"

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const StyledSpinner = styled(Spinner)`
    min-width: 50px;
    min-height: 50px;
`