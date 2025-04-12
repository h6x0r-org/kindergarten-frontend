import { Wrapper } from './styles'
import { ROUTER } from '../../constants/router'
import IconLogo from '../../assets/icons/logo.svg'

export const Logo = () => {
	return (
		<Wrapper to={ROUTER.HOME}>
			<IconLogo />
		</Wrapper>
	)
}
