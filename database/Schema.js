var Schema = {
  plane_crashes_1908: {
    crash_id: {type: 'increments', nullable: false, primary: true},
    date: {type: 'string'},
    time: {type: 'time'},
    location: {type: 'string'},
    operator: {type: 'string'},
    "flight_#": {type: 'string'},
    route: {type: 'string'},
    type: {type: 'string'},
    registration: {type: 'string'},
    aboard: {type: 'integer'},
    fatalities: {type: 'integer'},
    ground: {type: 'integer'},
    summary: {type: 'text'}
  }
}

module.exports = Schema