import reactCSS from 'reactcss'


export default reactCSS({
  'default': {
    wrapper: {
      display:    'flex',
      flexFlow:   'row wrap',
      fontWeight: 'bold',
      textAlign:  'center'
      // backgroundColor: 'black'
    },
    header: {
      padding: '10px',
      flex: '1 100%',
      height: '100px',
      backgroundColor: '#10206b'
    },
    footer: {
      padding: '10px',
      flex: '1 100%',
      height: '75px',
      order: 3,
      backgroundColor: '#666666'
    },
    main: {
      padding: '10px',
      flex: '3 0px',
      minHeight: '400px',
      order: 2,
      textAlign: 'left',
      backgroundColor: 'deepskyblue'
    },
    aside1: {
      padding: '10px',
      order: 1,
      width: 200,
      backgroundColor: 'gold',
      border: '5px solid green'
    },
    aside2: {
      padding: '10px',
      order: 3,
      flex: '1 auto',
      backgroundColor: 'hotpink'
    },
    link: {
      border: '1px solid black',
      fontSize: 30
    }
  }
})