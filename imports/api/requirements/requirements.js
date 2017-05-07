export var requirements =
    [
        {
            id: 1,
            title: 'CR001 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'draft'
        },
        {
            id: 2,
            title: 'CR002 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'approved'
        },
        {
            id: 3,
            title: 'CR003 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'submitted'
        },
        {
            id: 4,
            title: 'CR004 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'rejected'
        },
        {
            id: 5,
            title: 'CR005 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'draft'
        },
        {
            id: 6,
            title: 'CR006 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'draft'
        },
        {
            id: 7,
            title: 'CR007 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'draft'
        },
        {
            id: 8,
            title: 'CR008 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'approved'
        },
        {
            id: 9,
            title: 'CR009 - Contract and Instruction modification process and workflow',
            description: 'Contract modification process. The contract has four status within the system: reserved, generated, approved and confirmed. Until the contract has been confirmed it is not possible to initiate the operation of the contract, meaning it won’t be possible to create a product instruction, fix lots or switch position.....',
            createdon: '2016-01-18 21:58:42.960',
            modifiedon: '2016-04-15 15:49:40.937',
            createdby: 'Guillermo Pincay',
            modifiedby: 'Wayne Rooney',
            version: 0.1,
            status: 'submitted'
        }
    ];

export function getMockRequirements(request) {
    let reqs = [];
    if(request.filter==undefined || request.filter=='' || request.filter=='all'){
        reqs = requirements;
    }else{
        reqs = requirements.filter((f)=>{
                return f.status==request.filter
            });
    }

    if(request.mostRecents){
        reqs = reqs.slice(0,4);
    }
    return reqs;
}


const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
const brandDanger =   '#f86c6b';

// Card Chart 1
export const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

export const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
export const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

export const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
export const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

export const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
export const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

export const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}
