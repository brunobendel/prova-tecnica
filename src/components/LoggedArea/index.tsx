import Profile from "components/Profile"
import { useFootBall } from "hooks/Football"

export const LoggedArea = () => {
    const {countries} = useFootBall();
    console.log('meus paises', countries)
    return(<><Profile/></>)
}

export default LoggedArea