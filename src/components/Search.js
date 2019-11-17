import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
display:inline-block;
float: right;
margin-right: 5cm;
`;

export default class Search extends React.Component {
    render() {
        return (
            <SearchBox>
                <input name="keyword" type="text" className="siimple-input"/><input type="submit" value="検索"/>
            </SearchBox>
        );
    }
}