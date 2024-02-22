import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes  from "prop-types"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`
const StyledLink = styled(Link)`
font-size: var(--font-sm);
text-decoration: none;
`

const Header = ({Sitetitle}) => (
  <StyledHeader>
    <StyledLink to="/"> 
        {Sitetitle}
    </StyledLink>
  </StyledHeader>
)

Header.propTypes={
  Sitetitle: propTypes.string
}

Header.defaultProps = {
  Sitetitle: ""
}

export default Header
