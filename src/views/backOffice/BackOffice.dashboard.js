import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import BOSidebar from '../backOffice/BOSidebar';
import LineChart from 'react-linechart';

class BackOfficeDashboard extends Component {
  render() {
    const data = [
      {
        color: 'steelblue',
        points: [
          { x: 1, y: 2 },
          { x: 3, y: 5 },
          { x: 5, y: 3 },
          { x: 7, y: 3 },
          { x: 8, y: 3 },
          { x: 10, y: 8 },
          { x: 13, y: 4 },
          { x: 14, y: 5 },
        ],
      },
    ];
    return (
      <div className='bg-light wd-wrapper'>
        <BOSidebar />
        <div className='wrapper-wx'>
          <div className='container-fluid'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                    <div className='row'>
                      <div className='col-4'>
                        <img
                          src='/images/admin.Users.png'
                          className='rounded-circle sidebar-image my-auto'
                        ></img>
                      </div>
                      <div className='col-8'>
                        <h6 style={{ color: '#1E90FF' }}>Customers</h6>
                        <h6>364</h6>
                      </div>
                    </div>
                  </h6>
                </div>

                <div className='col'>
                  <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                    <div className='row'>
                      <div className='col-4'>
                        <img
                          src='/images/admin.Users.png'
                          className='rounded-circle sidebar-image my-auto'
                        ></img>
                      </div>
                      <div className='col-8'>
                        <h6 style={{ color: '#1E90FF' }}>Cash Collectors</h6>
                        <h6>12</h6>
                      </div>
                    </div>
                  </h6>
                </div>

                <div className='col'>
                  <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                    <div className='row'>
                      <div className='col-4'>
                        <img
                          src='/images/admin.Users.png'
                          className='rounded-circle sidebar-image my-auto'
                        ></img>
                      </div>
                      <div className='col-8'>
                        <h6 style={{ color: '#1E90FF' }}>Sales Reps</h6>
                        <h6>24</h6>
                      </div>
                    </div>
                  </h6>
                </div>

                <div className='col'>
                  <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                    <div className='row'>
                      <div className='col-4'>
                        <img
                          src='/images/admin.Users.png'
                          className='rounded-circle sidebar-image my-auto'
                        ></img>
                      </div>
                      <div className='col-8'>
                        <h6 style={{ color: '#1E90FF' }}>Employees</h6>
                        <h6>35</h6>
                      </div>
                    </div>
                  </h6>
                </div>

                <div className='col'>
                  <h6 className='text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded'>
                    <div className='row'>
                      <div className='col-4'>
                        <img
                          src='/images/admin.Users.png'
                          className='rounded-circle sidebar-image my-auto'
                        ></img>
                      </div>
                      <div className='col-8'>
                        <h6 style={{ color: '#1E90FF' }}>Drivers</h6>
                        <h6>5</h6>
                      </div>
                    </div>
                  </h6>
                </div>
              </div>

              <div className='row'>
                <div className='col-4'>
                  <div className='row'>
                    <div className='col'>
                      <div
                        className='card border-0 shadow-sm rounded mt-3 bg-white pb-2'
                        style={{ padding: '10px', color: '#929b94' }}
                      >
                        <div className='row'>
                          <div className='col-4'>
                            <center>
                              <img
                                src='/images/truck.png'
                                className='img-fluid my-auto'
                                style={{ width: '70px' }}
                              />
                            </center>
                          </div>
                          <div className='col-8'>
                            <h6 style={{ color: '#1E90FF' }}>
                              This month Income{' '}
                            </h6>
                            <h3>100,646.00 LKR</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col'>
                      <div
                        className='card border-0 shadow-sm rounded mt-3 bg-white pb-2'
                        style={{ padding: '10px', color: '#929b94' }}
                      >
                        <div className='row'>
                          <div className='col-4'>
                            <center>
                              <img
                                src='/images/truck.png'
                                className='img-fluid my-auto'
                                style={{ width: '70px' }}
                              />
                            </center>
                          </div>
                          <div className='col-8'>
                            <h6 style={{ color: '#1E90FF' }}>
                              Last month Income
                            </h6>
                            <h3>65,988.87 LKR</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col'>
                      <div
                        className='card border-0 shadow-sm rounded mt-3 bg-white pb-2'
                        style={{ padding: '10px', color: '#929b94' }}
                      >
                        <div className='row'>
                          <div className='col-4'>
                            <center>
                              <img
                                src='/images/truck.png'
                                className='img-fluid my-auto'
                                style={{ width: '70px' }}
                              />
                            </center>
                          </div>
                          <div className='col-8'>
                            <h6 style={{ color: '#1E90FF' }}>Net Income</h6>
                            <h3>565,988.87 LKR</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-8'>
                  <div className='card border-0 shadow-sm rounded mt-3 bg-white pt-2 pb-3 px-2'>
                    <h6 className='text-muted bold-normal px-2 mb-0'>
                      Last Two Weeks Revenue
                    </h6>
                    <h5 className='text-dark bold-normal px-2 pt-1 pb-3 '>
                      LKR
                    </h5>
                    <LineChart
                      xLabel='DAYS'
                      yLabel='REVENUE'
                      width={750}
                      height={400}
                      options={options2}
                      data={data}
                    />
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const options2 = {
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};
const cardstyle =
  'card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row';

export default withRouter(BackOfficeDashboard);
