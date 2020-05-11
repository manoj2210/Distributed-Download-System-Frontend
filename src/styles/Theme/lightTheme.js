import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5853BC',
    },
    secondary: {
      main: '#FA8C62',
    },
    error: {
      main: '#FF735F',
    },
    warning: {
      main: '#FFE466',
    },
    background: {
      default: '#ECECF9',
    },
    text: {
      main: '#3C3B3E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#ECECF9',
      },
    },
    MuiTypography: {
      h6: {
        color: '#5853BC',
      },
      paragraph: {
        color: '#3C3B3E',
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#ECECF9',
      },
    },
    MuiListItem: {
      root: {
        color: '#ECECF9',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#3C3B3E',
      },
    },
    MuiList: {
      padding: {
        paddingTop: 'unset',
        paddingBottom: 'unset',
      },
    },
  },
});

export default theme;
