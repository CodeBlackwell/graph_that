import reactCSS from 'reactcss'


export default reactCSS({
  'default': {
    wrapper: {
      display:    'flex',
      flexFlow:   'row wrap',
      fontWeight: 'bold',
      textAlign:  'center'
    },
    header: {
      padding: '10px',
      flex:    '1 100%',
      height:  '75px',
      backgroundColor: '#10206b'
    },
    footer: {
      padding: '10px',
      flex:    '1 100%',
      height:  '75px',
      order:   3,
      backgroundColor: '#666666'
    },
    main: {
      padding: '10px',
      flex: '3 0px',
      minHeight: '400px',
      maxHeight: '453px',
      order: 2,
      textAlign: 'left',
      overflow: 'auto',
      backgroundColor: 'deepskyblue'
    },
    aside1: {
      padding: '10px',
      order: 1,
      width: 200,
      border: '5px solid green',
      backgroundColor: 'gold'
    },
    aside2: {
      padding: '2px',
      order: 3,
      width: '400px',
      backgroundColor: 'hotpink',
    },
    link: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 17,
      padding: '12px 24px',
      color: '#999'
    },
    tweet: {
      color: 'deepskyblue',
      margin: 2,
      backgroundColor: 'black',
      borderRadius: '10px',
      textAlign: 'center'
    },
    timestamp: {
      color: 'white',
      fontSize: '12px',
      paddingLeft: 20,
      textAlign: 'left'
    },
    table: {
      border: '1px solid black',
      maxHeight: '400px',
      overflow: 'auto'

    }
  }
})