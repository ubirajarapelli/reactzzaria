import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import Logo from './logo'
import { AccountCircle } from '@material-ui/icons'
import { useAuth } from 'hooks'
import { HOME } from 'routes'

const HeaderCommon = () => {
  const [anchorElement, setAnchorElement] = useState(null)

  const { userInfo, logout } = useAuth()

  const handleOpneMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }
  return (
    <>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <Logo />
        </LinkLogo>
      </LogoContainer>
      <Typography color='inherit'>Olá {userInfo.user.firstName}</Typography>
      <IconButton color='inherit' onClick={handleOpneMenu}>
        <AccountCircle />
      </IconButton>
      <Menu
        open={Boolean(anchorElement)}
        onClose={handleClose}
        anchorEl={anchorElement}
      >
        <MenuItem onClick={logout}>Sair</MenuItem>
      </Menu>
    </>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1
`
const LinkLogo = styled(Link)`
  display: inline-block;
`
export default HeaderCommon
