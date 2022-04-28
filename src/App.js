import React, { Component } from 'react';
import Title from "./components/Title";
import Sort from "./components/Sort";
import Search from "./components/Search";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import Items from "./mockdata/Items";
import './sweetalert.css'
import {v4 as uuidv4} from 'uuid';
import { orderBy as orderById } from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        let arrayLevel = [];
        if (Items.length > 0) {
            for (let i=0; i<Items.length; i++) {
                if (arrayLevel.indexOf(Items[i].level) === -1) {
                    arrayLevel.push(Items[i].level);
                }
            }
        }
        arrayLevel.sort(function (a, b){return a - b});
        this.state = {
            items: Items,
            // Add item parameters
            arrayLevel: arrayLevel,
            showForm: false,
            valueItem: '',
            levelItem: 0,
            // Sort items
            sortType: '',
            sortOrder: '',
        };
    }

    //---------ADD ITEM METHODS----------------
    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    handleFormInputChange = (value) => {
        this.setState({
            valueItem: value
        });
    }

    handleFormSelectChange = (value) => {
        this.setState({
            levelItem: value
        });
    }

    handleFormClickCancel = () => {
        this.setState({
            valueItem: '',
            levelItem: 0
        });
    }

    handleFormClickSubmit = () => {
        let {valueItem, levelItem} = this.state;
        if (valueItem.trim() === 0) return false;
        let newItem = {
            id: uuidv4(),
            name: valueItem,
            level: +levelItem,
        };
        Items.push(newItem);
        this.setState({
            items: Items,
            valueItem: '',
            levelItem: 0,
            showForm: false
        });
    }

    //----------SORT ITEMS METHODS-----------------
    handleSort = (sortType, sortOrder) => {
        this.setState({
            sortType: sortType,
            sortOrder: sortOrder
        });
        let {items} = this.state;
        this.setState({
            items: orderById(items, [sortType], [sortOrder])
        });
    }

    render() {
        return (
            <div className="container">
                <Title />
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort
                            sortType={this.state.sortType}
                            sortOrder={this.state.sortOrder}
                            handleSort={this.handleSort}
                        />
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button
                            type="button"
                            className="btn btn-info btn-block marginB10"
                            onClick={this.handleShowForm}
                        >
                            {(this.state.showForm) ? 'Close Item' : 'Add Item'}
                        </button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <Form
                            showForm={this.state.showForm}
                            arrayLevel={this.state.arrayLevel}
                            valueItem={this.state.valueItem}
                            handleFormInputChange={this.handleFormInputChange}
                            levelItem={this.state.levelItem}
                            handeFormSelectChange={this.handleFormSelectChange}
                            handleFormClickCancel={this.handleFormClickCancel}
                            handleFormClickSubmit={this.handleFormClickSubmit}
                        />
                    </div>
                </div>
                <ListItem />
            </div>
        );
    }
}

export default App;