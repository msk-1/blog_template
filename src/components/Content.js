
import React from 'react';
import pic1 from '../resource/pic1.jpg'
import styled from 'styled-components';

const Title = styled.a`
text-decoration: none;
color: #939393;
&:hover{
  color: #376F7C;
}
`;
const Pic = styled.img`
float: left;
`;
const Date = styled.text`
font-size: 16px;
`;

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Pic src={pic1}　width="300" height="200"/>
        <Date>2019/11/2</Date>
        <br></br>
        <Title href=''>
          ビジネスで成果を出すには共感力を捨てるべき話
        </Title>
      </div>
    );
  }
}