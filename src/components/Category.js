import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Categorys = styled.div`
background: bisque;
font-size: 28px;
display:inline-block;
height: auto;
width: 100vw;
margin-left: auto;
margin-right: auto;
text-align: center;
a {
    color: #939393;
    margin-right: 50px;
    margin-left: 20px;
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
            </Categorys>
        )
    }
}