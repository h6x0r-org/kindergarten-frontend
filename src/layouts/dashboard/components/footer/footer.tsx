import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { FooterContainer } from './styles'

const CONTACTS = [
	{
		name: 'Ислом',
		link: 'https://t.me/h6x0r'
	},
	{
		name: 'Ота',
		link: 'https://t.me/ota_fayz'
	}
]

export const Footer = () => {
	return (
		<FooterContainer>
			<Typography variant="body2" color="text.secondary">
				Контакты:&nbsp;
				{CONTACTS.map((contact, index) => (
					<Box key={contact.name} component="span">
						<Link
							href={contact.link}
							target="_blank"
							rel="noopener noreferrer"
							underline="hover"
							variant="body2"
							color="primary"
						>
							{contact.name}
						</Link>
						{index === CONTACTS.length - 2 && ' и '}
					</Box>
				))}
			</Typography>
		</FooterContainer>
	)
}