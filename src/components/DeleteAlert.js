import React, {Component} from "react";
import SweetAlert from "sweetalert-react";
import './../sweetalert.css'
import Items from "./../mockdata/Items";

class DeleteAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Items,
            showAlert: true,
            titleAlert: '',
            idAlert: '',
        };
    }

    handleShowAlert = (item) => {
        console.log(item);
        this.setState({
            showAlert: true,
            titleAlert: item.name,
            idAlert: item.id,
        });
    }

    handleDeleteItem = () => {
        let {idAlert, items} = this,state;
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

    render() {
        return(
            <SweetAlert
                show={this.state.showAlert}
                title="Delete Item"
                text={this.state.titleAlert}
                showCancelButton
                onOutsideClick={() => this.setState({ showAlert: false})}
                onEscapeKey={()    => this.setState({ showAlert: false})}
                onCancel={()       => this.setState({ showAlert: false})}
                onConfirm={()      => {
                    this.handleDeleteItem();
                    this.setState({ showAlert: false});
                }}
            />
        );
    }
}

export default DeleteAlert;