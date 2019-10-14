import styled from 'styled-components'
import { Divider as MatDivider } from '@material-ui/core'

const Divider = styled(MatDivider)`
  && {
    width: 100%;
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`
export default Divider
