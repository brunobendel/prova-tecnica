import NotLoggedIn from 'components/NotLoggedIn'
import * as S from './styles'

const Main = ({}) => {
const userIsLogged = false
return (
  <S.Wrapper>
    <S.StyledPanel>
      {userIsLogged ? (<></>) : (
      <NotLoggedIn/>
      )}
    </S.StyledPanel>
  </S.Wrapper>
  )
}

export default Main
