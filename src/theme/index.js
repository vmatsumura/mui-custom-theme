import {
    createMuiTheme
} from '@material-ui/core'
import colors from './colors'
import MuiButton from './MuiButton'
// import MuiAppBar from './MuiAppBar'
// import MuiToolbar from './MuiToolbar'
// import MuiTypography from './MuiTypography'
// import MuiCheckbox from './MuiCheckbox'
// import MuiInput from './MuiInput'
// import MuiInputLabel from './MuiInputLabel'
// import MuiFormControl from './MuiFormControl'
// import MuiSelect from './MuiSelect'
// import MuiMenuItem from './MuiMenuItem'
// import MuiFormHelperText from './MuiFormHelperText'
// import MuiFormLabel from './MuiFormLabel'
// import MuiListItem from './MuiListItem'

const theme = (themeType = 'light') => createMuiTheme({
  themeName: "Custom Theme",
  palette: {
    type: themeType,
    primary: {
      main: colors.primaryYellow,
    },
    secondary: {
      main: colors.secondaryGrey,
    },
    error: {
      main: colors.dataRed100
    },
    text: {
      // primary: colors.dataOrange100,
      // secondary: colors.dataGreen100,
      // disabled: colors.dataPurple100,
      // hint: colors.dataYellow100,
    },
    action: {
      disabled: colors.disabledText,
      disabledBackground: colors.disabledBackground,
      hover: colors.primaryYellowHover,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: '"Roboto"',
    // useNextVariants: true,
  },
  props: {
    MuiTypography: {
      color: themeType === 'dark' ? 'textSecondary' : 'default'
    },
    MuiInput: {
      // disableUnderline: true,
    },
    MuiInputLabel: {
      shrink: true,
    }
  },
  transitions: {
  },
  overrides: {
    MuiButton,
    // MuiAppBar,
    // MuiToolbar,
    // MuiTypography,
    // MuiCheckbox,
    // MuiInput,
    // MuiInputLabel,
    // MuiFormControl,
    // MuiSelect,
    // MuiMenuItem,
    // MuiFormHelperText,
    // MuiFormLabel,
    // MuiListItem,
  }
})

export default theme