import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.primary ? "cornflowerblue" : "white"};
  color: ${props => props.primary ? "white" : "cornflowerblue"};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
`

export const Navbar = styled.div`
  background: ${props => props.dark ? "#4d4d4d" : " #eeeeee"};
  color: ${props => props.dark ? " #eeeeee" : "#4d4d4d"};
`

export const NavTitle = styled.h3`
  margin: 0 10px;
`


export const Avatar = styled.img`
  width: 2em;
  border-radius: 50%;
  margin: 8px;
`