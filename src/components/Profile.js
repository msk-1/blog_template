import React from 'react';
import styled from 'styled-components';

export default class Profile extends React.Component{
    render(){
        return(
            <div>
            <Title>ブログで稼ぐ</Title>
            </div>
        );
    }
}

// styled-components
const Title = styled.h1`
font-size: 34px;
`;


