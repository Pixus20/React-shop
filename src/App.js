import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowFullitem from "./components/ShowFullitem";
import Items from "./components/items";

class App extends React.Component{
   constructor(props){
      super(props)
      this.state ={
         orders:[],
         currentItems:[],
         items:[
            {
               id:1,
               title:'Brown chair',
               img:'brown_chair.webp',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'chairs',
               price: '49.99'
            },
            {
               id:2,
               title:'Comfort chair',
               img:'chair2.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'chairs',
               price: '69.99'
            },
            {
               id:3,
               title:'Brown table',
               img:'table1.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'tables',
               price: '99.99'
            },
            {
               id:4,
               title:'Round table',
               img:'table2.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'tables',
               price: '149.99'
            },
            {
               id:5,
               title:'Lovely lamp',
               img:'lamp1.jpg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'Light',
               price: '49.99'
            },
            {
               id:6,
               title:'Large gray sofa',
               img:'sofa_1.jpeg',
               desc: 'Lorem ipsum dolor sit amet, consectetur adipisting',
               category:'sofa',
               price: '399.50'
            }
         ],
         showFullitem : false,
         fullItem:{}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
   }
   render(){
      return(
         <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
            <Categories chooseCategory={this.chooseCategory}/>
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

            {this.state.showFullitem && <ShowFullitem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
            <Footer/>
         </div>
      );
   }

   onShowItem(item){
      this.setState({fullItem : item})
      this.setState({showFullitem: !this.state.showFullitem})
   }

   chooseCategory(category){
      if(category === 'all'){
         this.setState({currentItems:this.state.items})
         return
      }

      this.setState({
         currentItems: this.state.items.filter(el=> el.category === category)
      })
   }

   deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el=> el.id !==id)})
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