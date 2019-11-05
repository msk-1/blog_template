import React from 'react';
import styled from 'styled-components';
import pic01 from '../resource/pic01.jpg'

export default class Profile extends React.Component{
    render(){
        return(
            <div>
            <Pic01 src={pic01} width = "300" height="200" />
            <Name>ボクは、てらそるまさき</Name>
            <Title>あの、バナナはおやつに入りますか</Title>
            </div>
        );
    }
}

// css
const Title = styled.a`
color: #FFFFFF;
background-color: #000000;
font-size: 30px;
font-family: Meiryo;
`;

const Pic01 = styled.img`
float: left;
`;

const Name = styled.h1`
color: #FFFFFF;
font-size: 20px;
background-color: #000000;
font-family: Meiryo;
`;
