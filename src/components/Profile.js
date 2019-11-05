import React from 'react';
import styled from 'styled-components';
import pic01 from '../resource/pic01.jpg'

export default class Profile extends React.Component{
    render(){
        return(
            <Back>
            <Pic01 src={pic01} width = "300" height="200" />
            <Name>Naoto Takise</Name>
            <Title>
                ブログ・アフィリエイトで<br/>
                生計を立てているエンジニア<br/>
                <br/>
                ブログで月収800万円を<br/>
                達成する方法を伝授します
            </Title>
            </Back>
        );
    }
}

// css
const Title = styled.a`
color: #666666;
font-size: 20px;
font-family: Meiryo;
`;

const Pic01 = styled.img`
float: center;
border-radius: 50%;
width: 180px;
height: 180px;
`;

const Name = styled.h1`
color: #666666;
font-size: 30px;
font-family: Meiryo;
`;

const Back = styled.section`
background-color: #CCCCCC;
`;