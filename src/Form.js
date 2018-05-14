import React from "react";

export default class Form extends React.Component {

    getForm(event) {
        event.preventDefault();

        const nama = event.target.Nama.value;
        const tinggi = event.target.Tinggi.value;
        const berat = event.target.Berat.value;


        console.log(nama+", "+tinggi+", "+berat);
        this.props.saveData(nama, tinggi, berat);
    }

    render(){
        return (
            <div>
                <form className = "header-form" onSubmit={this.getForm.bind(this)}>
                    <input type="text" name="Nama" placeholder="Nama Lengkap"/>&nbsp;
                    <input type="text" name="Tinggi" placeholder="Tinggi"/> &nbsp;
                    <input type="text" name="Berat" placeholder="Berat"/> &nbsp;
                    <input type="submit" value="Hitung" />
                </form>
            </div>
        );
    }
}