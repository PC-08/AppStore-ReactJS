// Write your code here
import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props

  return (
    <li className="app-list-container">
      <img className="app-list-img" alt={appName} src={imageUrl} />
      <p className="app-list-name">{appName}</p>
    </li>
  )
}

export default AppItem
