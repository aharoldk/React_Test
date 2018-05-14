import React from 'react';
import ListTable from './ListTable';

export default class Table extends React.Component {
    render() {
        return(
            <div>
                <table className="center header-form">
                    <tr>
                        <td>#</td>
                        <td>Nama</td>
                        <td>Tinggi</td>
                        <td>Berat</td>
                        <td>BML</td>
                    </tr>
                    {
                        this.props.data.map((data, index) => <ListTable no={index + 1} nama={data.nama} tinggi={data.tinggi} berat={data.berat} />)
                    }
                </table>
            </div>
        );
    }
}