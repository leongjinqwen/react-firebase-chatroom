import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.outlined ? 'white' : props.color };
  color: ${props => props.outlined ? props.color : "white"};
  border: 1px solid ${props => props.outlined ? props.color : 'white' } ;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  &:hover {
    background: ${props => props.outlined ? props.color : "white" };
    color: ${props => props.outlined ?  "white": props.color};
  }
`

export const Navbar = styled.div`
  background: ${props => props.dark ? "#4d4d4d" : "#eeeeee"};
  color: ${props => props.dark ? " #eeeeee" : "#4d4d4d"};
  height: 10vh;
`

export const NavTitle = styled.h4`
  margin: 0 10px;
`

export const Avatar = styled.img`
  width: 2em;
  border-radius: 50%;
  margin: 8px;
`
export const ChatBox = styled.form`
  width: 100%;
  background:transparent;
  input {
    width: 90%;
    padding: 8px 16px;
    outline:none;
  }
  button[type=submit] {
    width: 10%;
    font-weight: 700;
    background: white;
    border: 2px solid cornflowerblue;
    color: cornflowerblue;
    padding:8px 16px;
    box-sizing:border-box;
    cursor: pointer;

    &:hover {
      background:cornflowerblue;
      color:white;
    }
  }
`
export const Footer = styled.footer`
  color:#eeeeee;
  font-size:12px;
  font-weight:700;
  text-align:center;
`
