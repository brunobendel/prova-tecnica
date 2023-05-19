import { useAuth } from 'hooks/Auth'
import * as S from './styles'
const Profile = () =>{
    const {userFootBall} = useAuth()
    return <S.Wrapper>
        <S.LabelBemVindo>Seja bem vindo!</S.LabelBemVindo>
        <S.LabelUser>Usuário: {userFootBall.firstname + ' ' + userFootBall.lastname} </S.LabelUser>
        <S.LabelUser>Email: {userFootBall.email}</S.LabelUser>
    </S.Wrapper>
}

export default Profile