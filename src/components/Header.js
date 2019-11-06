import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
background: burlywood;
color: blanchedalmond;
text-align: center;
display: table-cell;
vertical-align: middle; 
text {
    vertical-align: middle;
}
font-size: 100px;
width: 100vw;
height: 300px;
`;

export default class Header extends React.Component {
    render() {
        return(
            <Head>
                <text>身軽に生きる</text>
            </Head>
        );
    }
}