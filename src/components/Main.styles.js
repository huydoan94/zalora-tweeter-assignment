export default (theme) => {
  return {
    layout: {
      width: 'auto',
      height: '100%',
      overflow: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: '80%',
        margin: '0 auto',
      },
    },
    paper: {
      marginTop: '64px',
      marginBottom: '64px',
      height: 'calc(100% - 168px)',
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    messageViewer: {
      height: '100%',
      margin: '30px 0',
      backgroundColor: 'lightGray',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    messageViewerInner: {
      margin: 0,
      padding: '20px',
    },
    headline: {
      margin: '0 auto',
      padding: '20px 0',
    },
    messageForm: {
      display: 'flex',
    },
  };
};
