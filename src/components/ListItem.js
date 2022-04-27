import React, {Component} from "react";
import Items from "../mockdata/Items";
import Item from "./Item";
import SweetAlert from "sweetalert-react";
import ItemEdit from "./ItemEdit";


class ListItem extends Component {
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
            items:Items ,
            // Delete item parameters
            showAlert: false,
            titleAlert: '',
            idAlert: '',
            // Edit item parameters
            indexEdit: 0,
            idEdit: '',
            nameEdit: '',
            levelEdit: 0,
            arrayLevel: arrayLevel
        }
    }

    // --------DELETE ITEM METHODS------------
    // Show alert when user delete an item
    handleShowAlert = (item) => {
        console.log(item);
        this.setState({
            showAlert: true,
            titleAlert: item.name,
            idAlert: item.id,
        });
    }

    // Delete item on state
    handleDeleteItem = () => {
        let {idAlert, items} = this.state;
        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === idAlert ) {
                    items.splice(i,1);
                    break;
                }
            }
        }
        this.setState({
            showAlert: false
        });
    }

    //--------EDIT ITEM METHODS---------------
    // Receive the edit item information
    handleEditItem = (index, item) => {
        this.setState({
            indexEdit: index,
            idEdit: item.id,
            nameEdit: item.name,
            levelEdit: item.level,
        });
    }

    // Set the value of idEdit
    handleEditClickCancel = () => {
        this.setState({
            idEdit: ''
        });
    }

    handleEditInputChange = (value) => {
        this.setState({
            nameEdit: value
        });
    }

    handleEditSelectChange = (value) => {
        this.setState({
            levelEdit: value
        });
    }

    handleEditClickSubmit = () => {
        let {items, idEdit, nameEdit, levelEdit} = this.state;
        if (items.length > 0) {
            for (let i=0; i<items.length; i++) {
                if (items[i].id === idEdit) {
                    items[i].name = nameEdit;
                    items[i].level = +levelEdit;
                    break;
                }
            }
        }
        this.setState({
            idEdit: ''
        });
    }

    // Render item on the table
    renderItem = () => {
        const {items, idEdit, indexEdit, nameEdit, levelEdit, arrayLevel} = this.state;
        if (items.length === 0) {
            return <Item item={0} />
        }
        return items.map((item, index) => {
            if (item.id === idEdit) {
                return (
                    <ItemEdit
                        key={index}
                        indexEdit={indexEdit}
                        nameEdit={nameEdit}
                        levelEdit={levelEdit}
                        arrayLevel={arrayLevel}
                        handleEditClickCancel={this.handleEditClickCancel}
                        handleEditInputChange={this.handleEditInputChange}
                        handleEditSelectChange={this.handleEditSelectChange}
                        handleEditClickSubmit={this.handleEditClickSubmit}
                    />
                )
            }
            return(
                <Item
                    item={item}
                    key={index}
                    handleShowAlert={this.handleShowAlert}
                    handleEditItem={this.handleEditItem}
                />
            )
        });
    }

    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Item</div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th
                            style={{width: '10%'}}
                            className="text-center"
                        >#
                        </th>
                        <th
                            style={{width: '15%'}}
                            className="text-center"
                        >Level
                        </th>
                        <th style={{width: '15%'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderItem()}
                    <SweetAlert
                        show={this.state.showAlert}
                        title="Delete Item"
                        text={this.state.titleAlert}
                        showCancelButton
                        onOutsideClick={() => this.setState({ showAlert: false})}
                        onEscapeKey={()    => this.setState({ showAlert: false})}
                        onCancel={()       => this.setState({ showAlert: false})}
                        onConfirm={()      => {
                            this.setState({ showAlert: false});
                            this.handleDeleteItem();

                        }}
                    />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListItem;