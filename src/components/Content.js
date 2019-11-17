
import React from 'react';
import pic1 from '../resource/pic1.jpg'
import styled from 'styled-components';
import {Padding} from './Utils';

const Wrapper = styled.section`
// background: #CAF6E6;
width: 650px;
height: 200px;
margin-top: 50px;
margin-left: 200px;
margin-right: auto;
`;

const Title = styled.a`
text-decoration: none;
color: #939393;
margin-left: auto;
font-size: 25px;
&:hover{
  color: #376F7C;
}
`;

const Pic = styled.img`
float: left;
margin-right: 0.5cm;
`;

const Date = styled.text`;
margin-left: auto;
color: #939393;
font-size: 16px;
`;

const Name = styled.div`
color: #939393;
text-align: right;
a {
  text-decoration: none;
  color: #939393;
}
`;

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Pic src={pic1}　width="300" height="200"/>
          <Date>2019/11/2</Date>
          <Padding top={30}>
            <Title href=''>
              ビジネスで成果を出すには、<br></br>
              共感力を捨てるべき話
            </Title>
          </Padding>
          <Padding top={50}>
            <Name><img src={pic1}　width="30" height="30"/> <a href="">Naoto Takise</a></Name>
          </Padding>
        </Wrapper>
      </div>
    );
  }
}