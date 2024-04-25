import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes  from "prop-types"
import {H1} from "../Heading"
import { Section } from "../Section"
import {IconButton} from '../Button'

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${props => props.theme.header.backgroundColor};
`
const StyledLink = styled(Link)`
font-size: var(--font-sm);
text-decoration: none;
color: ${props => props.theme.header.color};
`

const Header = ({Sitetitle}) => (
  <StyledHeader>
    <Section width = {11/12}>
    <StyledLink to="/"> 
    <H1>
    {Sitetitle}
    </H1>
    </StyledLink>
    </Section>
    <Section width = {1/12}>
      <IconButton icon= {<Search/>}/>
    </Section>
  </StyledHeader>
)

Header.propTypes={
  Sitetitle: propTypes.string
}

Header.defaultProps = {
  Sitetitle: ""
}

export { Header }
