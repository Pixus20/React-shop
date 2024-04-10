import React, { Component } from 'react';
import { FaTrashAlt } from "react-icons/fa";

export class Order extends Component {
   render() {
      return (
         <div className='item'>
            <img src={"./images/"+ this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}$</b>
            <FaTrashAlt className='delete_icon' onClick={()=>this.props.onDelete(this.props.item.id)}/>
         </div>
      )
   }
}

export default Order