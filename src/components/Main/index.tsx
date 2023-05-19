import NotLoggedIn from 'components/NotLoggedIn'
import * as S from './styles'
import { useAuth } from 'hooks/Auth'
import Loading from 'components/Loading'

const Main = ({}) => {
  const {isLogged, isLoading }=useAuth()
return (
  <S.Wrapper>
    <S.StyledPanel>
      {isLoading ?<Loading/> :(<>
        {isLogged ? (<></>) : (
      <NotLoggedIn/>
      )}
      </>)}
    
    </S.StyledPanel>
  </S.Wrapper>
  )
}

export default Main
