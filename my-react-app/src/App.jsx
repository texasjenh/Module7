import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import BitcoinRates from './components/BitCoinRates'
import RefCounter from './components/RefCounter'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/ReduceCounter'
import PostListReducer from './components/PostListReducer'
import SubscribeForm from './components/SubscribeForm'
import { UserProvider } from './context/userContext'
import MyThemeProvider from './context/MyThemeProvider'
import LoginForm from './components/LoginForm'
import Emoji from './components/Emoji'
import { EmojiProvider } from './context/emojiContext'
import AppRoutes from './Routes/AppRoutes'
import NavBar from './components/NavBar'
import ThemeSwitcher from "./components/ThemeSwitcher"
import BtcNavBar from './components/BtcNavBar'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <UserProvider>
          <MyThemeProvider>
            <ThemeSwitcher />
            {/* <BtcNavBar /> */}
            <NavBar />
            <AppRoutes />
            {/* <EmojiProvider > */}
           {/* provider component is at top level */}
            {/* <ClockDisplay /> so all children can use context data */}
            {/* <MoviesList /> even if they have children of their own */}
            {/* <ActivityFinder /> */}
            {/* <PostListReducer /> */}
            {/* logging in here can now set up current user everywhere */}
            {/* <LoginForm /> */}
            
              {/* <Emoji /> */}
              {/* <BitcoinRates /> */}
            {/* </EmojiProvider> */}
          </MyThemeProvider>
        </UserProvider>
          {/* <h1>Welcome to My App</h1> */}
          {/* <ClockDisplay /> */}
          {/* <ActivityFinder /> */}
          
          {/* <RefCounter /> */}
          {/* <VideoPlayer /> */}
          {/* <ReducerCounter /> */}
          {/* <PostListReducer /> */}
          {/* <SubscribeForm /> */}   
      </div>
    </>
  )
}

export default App
