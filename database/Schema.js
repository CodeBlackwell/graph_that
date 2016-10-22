var Schema = {
  plane_crashes_1908: {
    // table.increments('crash_id').primary();
    crash_id: {type: 'increments', nullable: false, primary: true},
    // table.string('date')
    date: {type: 'string'},
    // table.string('time')
    time: {type: 'time'},
    // table.string('location')
    location: {type: 'string'},
    // table.string('operator')
    operator: {type: 'string'},
    // table.string('flight_#')
    "flight_#": {type: 'string'},
    // table.string('route')
    route: {type: 'string'},
    // table.string('type')
    type: {type: 'string'},
    // table.string('registration')
    registration: {type: 'string'},
    // table.integer('aboard')
    aboard: {type: 'integer'},
    // table.integer('fatalities')
    fatalities: {type: 'integer'},
    // table.integer('ground')
    ground: {type: 'integer'},
    // table.string('summary')
    summary: {type: 'string'}
  }
}