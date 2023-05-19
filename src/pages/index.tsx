import Main from 'components/Main'
import { AuthProvider } from 'hooks/Auth'

export default function Home() {
  return(
    <AuthProvider>
      <Main />
    </AuthProvider>

  )

}
