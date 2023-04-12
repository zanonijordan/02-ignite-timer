import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoignite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoignite} />
      <nav>
        <NavLink to="" title="Timer">
          {<Timer size={24} />}
        </NavLink>
        <NavLink to="/history" title="history">
          {<Scroll size={24} />}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
