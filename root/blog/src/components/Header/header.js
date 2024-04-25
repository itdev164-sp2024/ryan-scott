import * as React from "react"
import { Link } from "gatsby"
import styled, {ThemeConsumer} from "styled-components"
import PropTypes  from "prop-types"
import {H1} from "../Heading"
import { Section } from "../Section"
import {IconButton} from '../Button'
import { SearchButton } from "../Button"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${({theme})=> theme.variants.header.primary.backgroundColor};
`
const StyledLink = styled(Link)`
font-size: var(--font-sm);
text-decoration: none;
color: ${props => props.theme.header.color};
`

const Header = ({Sitetitle}) => (
  <StyledHeader>
    <Section flex>
     <Section width = {1/12}
      flex flexDirection ="column" justifyContent="center">
        <ThemeConsumer>
          {theme => <Image src={theme.images.mainHeaderImage}/>}
        </ThemeConsumer>
     </Section>
    <Section width = {11/12}
      flex flexDirection = "column" justifyContent= "center">
        <Nav>
          <Title>
          <StyledLink to="/">  
          </StyledLink>
          </Title>
          <MediaQuery>
            <StyledLink></StyledLink>
             <StyledLink></StyledLink>
             <StyledLink></StyledLink>
          </MediaQuery>
          <SearchButton variant = 'contrast'/>
        </Nav>
    </Section>
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
