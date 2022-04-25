import React, {Component} from "react";
import './../App'
// import SweetAlert from "sweetalert-react";
import DeleteAlert from './DeleteAlert';

class Item extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     showAlert: false,
        //     titleAlert: '',
        //     idAlert: '',
        // };
    }

    // handleShowAlert = (item) => {
    //     console.log(item);
    //     this.setState({
    //         showAlert: true,
    //         titleAlert: item.name,
    //         idAlert: item.id,
    //     });
    // }

    // handleDeleteItem = () => {
    //     let {idAlert, items} = this,state;
    //     if (items.length > 0) {
    //         for (let i = 0; i < items.length; i++) {
    //             if (items[i].id === idAlert ) {
    //                 items.splice(i,1);
    //                 break;
    //             }
    //         }
    //     }
    //     this.setState({
    //         showAlert: false
    //     });
    // }

    popUp = () => {
        return (
            <DeleteAlert
                handleShowAlert = {this.handleShowAlert}
            />
        );
    }

    render() {
        let {item, index} = this.props;
        if (item === 0) {
            return (
                <tr>
                    <td
                        colSpan="4"
                        className="text-center"
                    >
                        <h4>No Item</h4>
                    </td>
                </tr>
            )
        }
        let classNameLabel = '';
        let nameLabel = '';
        switch (item.level) {
            case 1:
                classNameLabel = "label label-warning";
                nameLabel = "Medium";
                break;
            case 2:
                classNameLabel = 'label label-danger';
                nameLabel = 'High';
                break;
            default:
                classNameLabel = 'label label-info';
                nameLabel = 'Low';
                break;
        };
        return (
            <tr>
                <td className={"text-center"}>
                    {index}
                </td>
                <td>
                    {item.name}
                </td>
                <td className="text-center">
                    <span className={classNameLabel}>{nameLabel}</span>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning btn-sm"
                    >Edit</button>
                    <button
                        type="button"
                        className="btn btn btn-danger btn-sm"
                        // onClick={() => this.handleShowAlert(item)}
                        onClick={this.popUp}
                    >Delete</button>
                    {/*<DeleteAlert />*/}
                    {/*<SweetAlert*/}
                    {/*    show={this.state.showAlert}*/}
                    {/*    title="Delete Item"*/}
                    {/*    text={this.state.titleAlert}*/}
                    {/*    showCancelButton*/}
                    {/*    onOutsideClick={() => this.setState({ showAlert: false})}*/}
                    {/*    onEscapeKey={()    => this.setState({ showAlert: false})}*/}
                    {/*    onCancel={()       => this.setState({ showAlert: false})}*/}
                    {/*    onConfirm={()      => {*/}
                    {/*        this.handleDeleteItem();*/}
                    {/*        this.setState({ showAlert: false});*/}
                    {/*    }}*/}
                    {/*/>*/}
                </td>
            </tr>
        )
    }
}

export default Item;