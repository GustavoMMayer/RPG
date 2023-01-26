import styled from "styled-components";

export const Container = styled.div<{left:number, top:number, size:number, sidePos:number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left:${props=>props.left}px;
    top: ${props=>props.top}px;
    background-image: url('./assets/char.png');
    background-position: 0px ${props=>props.sidePos}px;
    transition: all ease 0.2;
    background-color:${props=>props.top > 370? "#00f":'transparent'} ;
    border-radius: 10px;

`;

export const Name = styled.div`
    font-size: 10px;
    text-align: center;
    margin-top: 25px;
    color:#000;
    
    

`;