import React from 'react';
class List extends React {
  render(){
    return (
      <ul className='list'>
        {this.props && this.props.items ? this.props.items.map((link,index)=>{
          return (<li className='item' key={index}>{item}</li>);
        }): null}
      </ul>
    );
  }
}
export default List;
