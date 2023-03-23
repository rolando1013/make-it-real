import React from 'react'
import styled from 'styled-components';

export const Button = ({clickado, text}) => {
  return (
    // <button onClick={clickado}>{text}</button>
    <ButtonCustom onClick={clickado}>{text}</ButtonCustom>
    )
}

const ButtonCustom = styled.button `
display: inline-block;
color: white;
background-color: gray;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid white;
border-radius: 3px;
display: block;
cursor: pointer;
&:hover { color: black; };
`;