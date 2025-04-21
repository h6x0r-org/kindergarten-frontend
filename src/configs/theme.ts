import { createTheme } from '@mui/material'

const baseTheme = createTheme()

export const theme = createTheme({
	palette: {
		primary: {
			main: baseTheme.palette.common.black
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained'
			},
			styleOverrides: {
				root: {
					textTransform: 'capitalize'
				}
			}
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					padding: baseTheme.spacing(1)
				}
			}
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					gap: baseTheme.spacing(4),
					paddingTop: `${baseTheme.spacing(1)} !important`
				}
			}
		}
	}
})