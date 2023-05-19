import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledPanel = styled.div`
  width: 75%;
  height: 75%;
  background-color: white;
  border-radius: 25px;


@media (min-width: 1281px) {
  width: 75%;
  height: 75%;
  
}

@media (min-width: 1025px) and (max-width: 1280px) {
  width: 85%;
  height: 85%;
  
}

@media (min-width: 768px) and (max-width: 1024px) {
  width: 85%;
  height: 85%;
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  width: 85%;
  height: 85%;
}

@media (min-width: 481px) and (max-width: 767px) {
  width: 95%;
  height: 95%;
}

@media (min-width: 320px) and (max-width: 480px) {
  width: 95%;
  height: 95%;
}
`