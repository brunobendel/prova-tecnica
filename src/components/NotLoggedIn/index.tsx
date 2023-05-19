import CustomButton from 'components/CustomButton'
import * as S from './styles'
import { useAuth } from 'hooks/Auth'

const NotLoggedIn = ({}) => {
    const {SignIn, errorLogin} = useAuth()
    const Logar = () => {
        SignIn()
    }
    return (
    <S.Wrapper>
        <div>
            {errorLogin ?  <S.LabelNotLogged>Houve um erro ao conectar, verifique sua chave da API-FOOTBALL ou tente novamente!</S.LabelNotLogged> :  <S.LabelNotLogged>O usuário não está logado!</S.LabelNotLogged>}
            <CustomButton action={Logar} color='AZUL' label='Logar' size='lg'/>
        </div>
    </S.Wrapper>
    )
}

export default NotLoggedIn
