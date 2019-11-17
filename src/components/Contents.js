import React from 'react';
import Content from './Content';
import styled from 'styled-components';

const Wrapper = styled.div`
display: inline-block;
`;

export default class Contents extends React.Component {
    render() {
      return (
        <Wrapper>
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
        </Wrapper>
      );
    }
}