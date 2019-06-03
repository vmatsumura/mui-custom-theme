import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from '@material-ui/styles';
import {
  Button,
  Toolbar,
  AppBar,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Checkbox,
  Radio,
  Switch,
 } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomButton from './components/button'
import theme from './theme'

const themeType = 'light'

function App() {
  return (
    <div className="App" style={{backgroundColor: themeType === 'dark' ? 'black' : 'initial'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ThemeProvider theme={theme(themeType)}>
        <section>
          <div className="container">
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography>        
                  <a 
                    href="https://material-ui.com/" 
                    style={{color: '#999'}}
                  >
                    Material-ui
                  </a> 
                    &nbsp;with custom theme
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        </section>
        <br />
        <section>
          <Typography variant="h4" color="secondary">{'<Buttons />'}</Typography>
          <div className="container">
            <Button color="primary" variant="text">Primary</Button>
            <Button color="secondary" variant="text">Secondary</Button>
            <Button disabled variant="text">disabled</Button>
          </div>
          <div className="container">
            <Button color="primary" variant="outlined">Primary</Button>
            <Button color="secondary" variant="outlined">Secondary</Button>
            <Button disabled variant="outlined">disabled</Button>
          </div>
          <div className="container">
            <Button color="primary" variant="contained">Primary</Button>
            <Button color="secondary" variant="contained">Secondary</Button>
            <Button disabled variant="contained">disabled</Button>
          </div>
        </section>
        <br />
        <Divider />
        <section>
          <Typography variant="h4" color="secondary">{'<CustomButtons />'}</Typography>
          <div className="container">
            <CustomButton color="primary" variant="text">Primary</CustomButton>
            <CustomButton color="secondary" variant="text">Secondary</CustomButton>
            <CustomButton disabled variant="text">disabled</CustomButton>
          </div>
          <div className="container">
            <CustomButton color="primary" variant="outlined">Primary</CustomButton>
            <CustomButton color="secondary" variant="outlined">Secondary</CustomButton>
            <CustomButton disabled variant="outlined">disabled</CustomButton>
          </div>
          <div className="container">
            <CustomButton color="primary" variant="contained">Primary</CustomButton>
            <CustomButton color="secondary" variant="contained">Secondary</CustomButton>
            <CustomButton disabled variant="contained">disabled</CustomButton>
          </div>
        </section>
        <br />
        <Divider />
        <section>
          <Typography variant="h4" color="secondary">{'<Typography />'}</Typography>
          <div className="container">
            <Typography variant="h1">h1. Heading</Typography>
            <Typography color="primary" variant="h2">h2. Heading</Typography>
            <Typography color ="secondary" variant="h3">h3. Heading</Typography>
            <Typography variant="h4">h4. Heading</Typography>
            <Typography color ="primary" variant="h5">h5. Heading</Typography>
            <Typography color ="secondary" variant="h6">h6. Heading</Typography>
          </div>
        </section>
        <br />
        <Divider />
        <section>
          <Typography variant="h4" color="secondary">{'<Inputs />'}</Typography>
          <div className="container">
            <TextField id="text-name" label="Name"/>
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <FormControl>
              <InputLabel htmlFor="select">select</InputLabel>
              <Select
                value="0"
                inputProps={{
                  name: 'age',
                  id: 'select',
                }}
              >
                <MenuItem value={0}>Five</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="select">disabled</InputLabel>
              <Select
                value="0"
                inputProps={{
                  name: 'age',
                  id: 'select',
                }}
                disabled
              >
                <MenuItem value={0}>Five</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>
        <br />
        <Divider />
        <section>
          <Typography variant="h4" color="secondary">{'<Checkbox />'}</Typography>
          <div className="container">
            <Checkbox />
            <Checkbox color='primary'/>
            <Checkbox disabled />
            <Checkbox checked disabled />
            <Checkbox indeterminate />
            <Checkbox indeterminate color='primary'/>
          </div>
        </section>
        <br />
        <Divider />
        <section>
          <Typography variant="h4" color="secondary">{'<Radio />'}</Typography>
          <div className="container">
            <Radio />
            <Radio color='primary'/>
            <Radio disabled />
            <Radio checked disabled />
          </div>
        </section>
        <br />
        <Divider />
        <section>
          <Typography variant="h4" color="secondary">{'<Switch />'}</Typography>
          <div className="container">
            <Switch />
            <Switch color='primary'/>
            <Switch disabled />
            <Switch checked disabled />
          </div>
        </section>
        <br />
        <Divider />
      </ThemeProvider>
    </div>
  )
}

export default App
