import React from 'react';

export default class  extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>追加</button><br />
        <ul>
          <li>TODO1</li>
          <li>TODO2</li>
        </ul>
      </div>
    );
  }
}