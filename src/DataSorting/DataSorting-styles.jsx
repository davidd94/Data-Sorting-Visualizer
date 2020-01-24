
const headerStyles = {
    headers: {
        display: 'none',
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
};

// data graph styles
const dataStyles = {
    MainContainerStyles: {
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
    },
    DataContainerStyles: {
        position: 'absolute',
        left: '0%',
        top: '-550px',
        width: '100%',
        height: '550px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    BarStyles: {
        width: '2px',
        backgroundColor: 'lightblue',
        fontSize: '18px',
        display: 'inline-block',
        margin: '0 1px',
    },
};

// button styles
const buttonStyles = {
    ContainerStyles: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '125px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#3b121a',
    },
    ListStyles: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '0 0',
        padding: '0 0',
        listStyle: 'none',
    },
    ListItemStyles: {
        margin: '0 16px',
        color: 'rgba(86,180,199,1)',
    },
    VerticalDivider: {
        background: 'linear-gradient(rgba(100,199,171,0), rgba(86,180,199,1), rgba(74,163,223,0))',
        height: '75px',
        width: '2px',
    },
};

// sliding bar
const sliderStyles = {
  position: 'relative',
  width: '100%',
  height: '60px',
};

const railStyles = {
  position: 'absolute',
  width: '100%',
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#8B9CB6',
};


export { headerStyles, dataStyles, buttonStyles, sliderStyles, railStyles }