import React from 'react';

export default class ListTable extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.no}</td>
                <td>{this.props.nama}</td>
                <td>{this.props.tinggi}</td>
                <td>{this.props.berat}</td>
                <td>{this.props.tinggi * this.props.berat / 100}</td>
            </tr>
            
        );
    }
}