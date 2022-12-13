// Write your code here 
import './index.css'
import { Component } from "react"
const UserMode = props => {
  const {UserMode} = props
  const {buttonText} = userDetails


class Counter extends Component {
  state = { isDarkMode : DarkMode  }
  onClickButton = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode}))
  }
 render(){
     const {isDarkMode} = this.state 
     const modeDisplay = isDarkMode ? 'dark-mode' : 'Light-mode'; 
     const buttonText = isDarkMode ? 'Light-mode' : 'dark-mode';
 }


       return (
     <div className = "containerBlock">
      <div className="modeDark">{modeDisplay}</div>
        <h1 className="heading"> Click Change Mode </h1>
        <button type ="button" {this.onClickButton}>{buttonText}</button>
      </div>
      </div>

  )
}

   }

  
export default UserMode
