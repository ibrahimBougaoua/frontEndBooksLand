import React, { Component } from "react";
import { Bar,Pie,Line,HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';
import Nav from "./nav";

// handle button click of login form
async function dashboardInformation() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/dashboard/information');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function dashboardChartBar() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/dashboard/chart/bar');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function dashboardChartPie() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/dashboard/chart/pie');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function dashboardChartLine() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/dashboard/chart/line');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function dashboardChartHorizontalBar() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/dashboard/chart/horizontalBar');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Dashboard extends Component {

  state = {
    dashboardNumber: [],bar: [],pie: [],line: [],horizontalBar: []
  }

  componentDidMount =()=>{
    dashboardInformation().then(response => {
      this.setState({
        dashboardNumber: response.data
      });
    });
    dashboardChartBar().then(response => {
      this.setState({
        bar: response.data
      });
    });
    dashboardChartPie().then(response => {
      this.setState({
        pie: response.data
      });
    });
    dashboardChartLine().then(response => {
      this.setState({
        line: response.data
      });
    });
    dashboardChartHorizontalBar().then(response => {
      this.setState({
        horizontalBar: response.data
      });
    });
  }

render() {

  const bar = {
    labels: this.state.bar[0],
    datasets: [
      {
        label: 'Number of Books last 12 years',
        data: this.state.bar[1],
        fill: false,          // Don't fill area under the line
        borderColor: 'black'  // Line color
      }
    ]
  }

  const pie = {
    labels: this.state.pie[0],
    datasets: [
      {
        label: 'Top rating of Books last 12 years',
        data: this.state.pie[1],
        fill: false,          // Don't fill area under the line
        borderColor: 'black'  // Line color
      }
    ]
  }

  const line = {
    labels: this.state.line[0],
    datasets: [
      {
        label: 'Number of Books by tags',
        data: this.state.line[1],
        fill: false,          // Don't fill area under the line
        borderColor: 'black'  // Line color
      }
    ]
  }
  

  const horizontalBar = {
    labels: this.state.horizontalBar[0],
    datasets: [
      {
        label: 'Top 10 Books views',
        data: this.state.horizontalBar[1],
        fill: false,          // Don't fill area under the line
        borderColor: 'black'  // Line color
      }
    ]
  }

return (
<div className="container">

<Nav name="Dashboard"></Nav>

<div className="row">

<div className="col-xl-4 col-md-6 mb-4">
  <div className="card border-left-primary shadow h-100 py-2 bg-light border-0">
    <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Users</div>
          <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.dashboardNumber[0]}</div>
        </div>
        <div className="col-auto">
          <i className="fas fa-user fa-2x text-muted"></i>
        </div>
      </div>
    </div>
  </div>
</div>


            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2 bg-light border-0">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Abonnements</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.dashboardNumber[1]}</div>
                    </div>
                    <div className="col-auto">
                      <i className="far fa-bell fa-2x text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2 bg-light border-0">
                <div class="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">all books</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.dashboardNumber[2]}</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-tv fa-2x text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

</div>

  <div className="row mb-4">
    <div className="col-sm-6">
      <div className="col align-self-center shadow p-2">
      <Bar data={bar} />
      </div>
    </div>
    <div className="col-sm-6">
      <div className="col align-self-center shadow p-2">
      <Pie data={pie} />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-sm-12 mb-4">
      <div className="col align-self-center shadow p-2">
      <Line data={line} />
      </div>
    </div>
    <div className="col-sm-12">
      <div className="col align-self-center shadow p-2">
      <HorizontalBar data={horizontalBar} />
      </div>
    </div>
  </div>

    </div>
);
}
}