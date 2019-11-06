import React from 'react';
import styled from 'styled-components';

const Categorys = styled.div`
background: bisque;
margin: center;
font-size: 28px;
display:inline-block;
height: auto;
a {
    color: #939393
    margin-right: 50px;
    margin-left: 50px;
    &:hover{
        color: #376F7C;
    }
}
`;

export default class Category extends React.Component {
    render() {
        return (
            <Categorys>
                <a href=''>home</a>    
                <a href=''>category1</a>
                <a href=''>category2</a>
                <a href=''>category3</a>
                <a href=''>category4</a>
                <a href=''>category5</a>
            </Categorys>
        )
    }
}