// Write your code here
import './index.css'

const TabItem = props => {
  const {tabId, displayText, changeTab, isActiveTab} = props

  const onClickTabItem = () => {
    changeTab(tabId)
  }

  const activeTab = isActiveTab ? 'activeTab' : ''

  return (
    <li className="tab-list-item">
      <button
        onClick={onClickTabItem}
        className={`tab-list-btn ${activeTab}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
