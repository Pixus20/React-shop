import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/items";

class App extends React.Component{
   constructor(props){
      super(props)
      this.state ={
         orders:[],
         items:[
            {
               id:1,
               title:'Brown chair',
               img:'brown_chair.webp',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'chairs',
               price: '49,99'
            },
            {
               id:2,
               title:'Comfort chair',
               img:'chair2.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'chairs',
               price: '69,99'
            },
            {
               id:3,
               title:'Brown table',
               img:'table1.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'tables',
               price: '99,99'
            },
            {
               id:4,
               title:'Round table',
               img:'table2.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'tables',
               price: '149,99'
            },
            {
               id:5,
               title:'Brown chair',
               img:'brown_chair.webp',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'chairs',
               price: '49,99'
            },
            {
               id:6,
               title:'Brown chair',
               img:'brown_chair.webp',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'chairs',
               price: '49,99'
            }
         ]
      }
      this.addToOrder = this.addToOrder.bind(this)
   }
   render(){
      return(
         <div className="wrapper">
            <Header orders={this.state.orders}/>
            <Items  items={this.state.items} onAdd={this.addToOrder}/>
            <Footer/>
         </div>
      );
   }

   addToOrder(item){
      let isInArray = false
      this.state.orders.forEach(el=>{
         if(el.id===item.id)
            isInArray= true
      })
      if(!isInArray)
      this.setState({orders:[...this.state.orders, item]}
   )}
}


export default App