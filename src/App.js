import React from 'react';
import logo from './logo.svg';
import Form from './Form';
import Filter from './Filter';
import Table from './Table';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      listData: [

      ],
      changeData: [

      ]
    };

    this.saveData = this.saveData.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  filterData(filter) {
    const listdata = this.state.listData;

    const changeData = this.state.listData.filter(data => data.nama.includes(filter));

    console.log(changeData);

    this.setState({
      changeData
    });

  }

  saveData(nama, tinggi, berat) {
    
    const data = {nama,tinggi,berat};
    const listData = this.state.listData;

    listData.push(data);

    this.setState({
      listData
    });

    const changeData = this.state.listData;

    this.setState({
      changeData
    });

    console.log(changeData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form saveData={this.saveData}/>
        <Filter filterData ={this.filterData} />
        <Table data={this.state.changeData}/>
      </div>
    );
  }
}
