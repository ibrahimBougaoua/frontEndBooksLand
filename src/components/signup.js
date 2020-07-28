import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
{label: "adventure", value: "adventure"},
{label: "animation", value: "animation"},
{label: "children", value: "children"},
{label: "comedy", value: "comedy"},
{label: "fantasy", value: "fantasy"},
{label: "romance", value: "romance"},
{label: "action", value: "action"},
{label: "crime", value: "crime"},
{label: "thriller", value: "thriller"},
{label: "horror", value: "horror"},
{label: "mystery", value: "mystery"},
{label: "sci-Fi", value: "sci-Fi"},
{label: "documentary", value: "documentary"},
{label: "imax", value: "imax"},
];

export default class Signup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {fisrtname: '',lastname: '',email: '',password: '',sexe: 'male',age: 15,country: 'NC',telephone: '',errorMessage: '',selected: []};
        
        this.handleChangeFisrtname = this.handleChangeFisrtname.bind(this);
        this.handleChangeLastname = this.handleChangeLastname.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeSexe = this.handleChangeSexe.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeFisrtname(event) {
        this.setState({fisrtname: event.target.value});
      }

      handleChangeLastname(event) {
        this.setState({lastname: event.target.value});
      }
    
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      handleChangeSexe(event) {
        this.setState({sexe: event.target.options[event.target.selectedIndex].value});
      }

      handleChangeAge(event) {
        this.setState({age: event.target.options[event.target.selectedIndex].value});
      }

      handleChangeCountry(event) {
        this.setState({country: event.target.options[event.target.selectedIndex].value});
      }

      handleChangeTelephone(event) {
        this.setState({telephone: event.target.value});
      }
      
      handleSubmit(event) {
        event.preventDefault();
      }

    render() {

    const {selected} = this.state;

// handle button click of signin form
const handleSignin = () => {
    axios.get('http://127.0.0.1:5000/movie/singup/', {params : {fisrtname : this.state.fisrtname,lastname : this.state.lastname,email : this.state.email,password : this.state.password,sexe : this.state.sexe,age : this.state.age,country : this.state.country,telephone : this.state.telephone,tags : this.state.selected.toString()}})
    .then(response =>  {
      // setter
      //this.setState({errorMessage: response.data});
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', response.data.email)
      // route for profile
      //window.location.replace("/account")
      console.log(response.data)
    }).catch(error => {
      this.setState({errorMessage: 'username or password is wrong !'});
    });
}

const country = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovi","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Repuc","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzave)","Costa Rica","Croatia","Cuba","Cyprus","Czechia (Czech Repub)","Democratic Republic the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevi","Saint Lucia","Saint Vincent and threnadines","Samoa","San Marino","Sao Tome and Princip","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of Amea","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe","Afghanistan"]

const ages = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]


const listCountry = country.map((element) =>
    <option value={element}>{element}</option>
);

const listAge = ages.map((element) =>
    <option value={element}>{element}</option>
);


return (
<div className="container mt-2 mb-5 mt-5">
    <div className="row justify-content-center position-relative">
        <div className="col-md-12">
            <div className="card border-0 shadow">

              { this.state.errorMessage && <div class="alert alert-danger" role="alert">{ this.state.errorMessage }</div> }

                <div className="card-header border-0 bg-dark text-light">Register</div>

                <div className="card-body">
                    <form method="POST" onSubmit={this.handleSubmit}>
                    <div class="form-row">
                        <div className="form-group  col-md-6">
                            <label for="name">FirstName</label>
                            <input id="name" type="text" value={this.state.fisrtname} onChange={this.handleChangeFisrtname} className="form-control" name="name" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="name">LastName</label>
                            <input id="name" type="text" value={this.state.lastname} onChange={this.handleChangeLastname} className="form-control" name="name" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="email">E-Mail Address</label>
                            <input id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" name="email" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="password">Password</label>
                            <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" name="password" />
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="name">Sex</label>
                            <select name="sexe" class="form-control" value={this.state.sexe} onChange={this.handleChangeSexe}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Tags</label>
                            <MultiSelect options={options} selected={selected} onSelectedChanged={selected => this.setState({selected})} />
                        </div>

                        <div className="form-group  col-md-6">
                            <label for="name">Age</label>
                            <select name="age" class="form-control" value={this.state.age} onChange={this.handleChangeAge}>
                                {listAge}
                            </select>
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="name">Country</label>
                            <select name="country" class="form-control" value={this.state.country} onChange={this.handleChangeCountry}>
                                {listCountry}
                            </select>
                        </div>
                        <div className="form-group  col-md-6">
                            <label for="name">Telephone</label>
                            <input id="name" type="text" value={this.state.telephone} onChange={this.handleChangeTelephone} className="form-control" name="name" />
                        </div>

                        <div className="form-group  col-md-12">
                            <button type="submit" className="btn btn-primary" onClick={handleSignin}>Register</button>
                        </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}