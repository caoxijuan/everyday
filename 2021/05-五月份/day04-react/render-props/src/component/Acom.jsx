import React from 'react';
import Mouse from "./Mouse";
class Acom extends React.Component {
  render() {
    return (
      <div><Mouse>{(mouse) => { <div>{mouse.x}--{mouse.y}</div> }}</Mouse></div>
    )
  }
}
export default Acom