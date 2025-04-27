import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'

export const SideDialog = styled(Dialog)`
    & .MuiDialog-container {
        justify-content: flex-end;
        height: auto;
    }

    & .MuiPaper-root {
        height: 100vh;
        margin: 0;
    }
`