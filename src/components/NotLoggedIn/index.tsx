import CustomButton from 'components/CustomButton'
import * as S from './styles'

const NotLoggedIn = ({}) => {

    const Logar = () => {
        console.log('logar')
    }
    return (
    <S.Wrapper>
        <div>
            <S.LabelNotLogged>O usuário não está logado!</S.LabelNotLogged>
            <CustomButton action={Logar} color='AZUL' label='Logar' size='lg'/>
        </div>
    </S.Wrapper>
    )
}

export default NotLoggedIn
