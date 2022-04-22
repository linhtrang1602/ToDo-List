import React, { Component } from 'react';
import Title from "./components/Title";
import Sort from "./components/Sort";
import Search from "./components/Search";
import ListItem from "./components/ListItem";
//import Item from "./components/Item";
//import ItemEdit from "./components/ItemEdit";
import Form from "./components/Form";
import Items from "./mockdata/Items";
import SweetAlert from 'sweetalert-react';
import './sweetalert.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Items,
            // showAlert: false,
            // titleAlert: '',
            // idAlert: '',
        }
    }

    // handleShowAlert = (item) => {
    //     console.log(item);
    //     this.setState({
    //         showAlert: true,
    //         titleAlert: item.name,
    //         idAlert: item.id,
    //     });
    // }
    //
    // handleDeleteItem = () => {
    //     let {idAlert, items} = this,state;
    //     if (items.length > 0) {
    //         for (let i = 0; i < items.length; i++) {
    //             if (items[i].id == idAlert ) {
    //                 items.splice(i,1);
    //                 break;
    //             }
    //         }
    //     }
    //     this.setState({
    //         showAlert: false
    //     });
    // }

    render() {
        return (
            <div className="container">
                {/*<button onClick={()=>this.setState({ showAlert: true })}>Alert</button>*/}
                {/*<SweetAlert*/}
                {/*    show={this.state.showAlert}*/}
                {/*    title="Delete Item"*/}
                {/*    text={this.state.titleAlert}*/}
                {/*    showCancelButton*/}
                {/*    onOutsideClick={() => this.setState({ showAlert: false})}*/}
                {/*    onEscapeKey={()    => this.setState({ showAlert: false})}*/}
                {/*    onCancel={()       => this.setState({ showAlert: false})}*/}
                {/*    onConfirm={()      => this.handleDeleteItem()}*/}
                {/*/>*/}
                <Title />
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <Search />
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <Sort />
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                  <button
                      type="button"
                      className="btn btn-info btn-block marginB10">Add Item</button>
                </div>
              </div>
              <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                  <Form />
                </div>
              </div>
              <ListItem />
            </div>
        );
  }
}

export default App;