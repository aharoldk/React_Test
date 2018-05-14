import React from 'react';

export default class Filter extends React.Component {

    filterIt(event) {
        event.preventDefault();
        
        const filter = event.currentTarget.value;
        console.log(filter);

        this.props.filterData(filter);
    }

    render(){
        return(
            <div>
                <input className="header-form" type="text" placeholder="Filter By Name ..." onChange={this.filterIt.bind(this)}/>
            </div>
        );
    }
}