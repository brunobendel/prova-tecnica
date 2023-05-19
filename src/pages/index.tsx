import Main from 'components/Main'
import { AuthProvider } from 'hooks/Auth'
import { FootBallProvider } from 'hooks/Football'

export default function Home() {
  return(
    <FootBallProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </FootBallProvider>
  )

}
