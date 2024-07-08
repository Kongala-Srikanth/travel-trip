import './index.css'

const SideBarOptions = props => {
  const {stepsList, activeOptionId, successTicks} = props

  return (
    <div className="side-bar-bg-container">
      <ul className="side-bar-selection-option">
        {stepsList.map(each => (
          <li className="each-section-option" key={each.stepId}>
            {successTicks.includes(each.stepId) ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                alt={each.displayText}
                className="success-tick-mark"
              />
            ) : (
              <p
                className={
                  activeOptionId === each.stepId
                    ? 'selection-number active-selection-number'
                    : 'selection-number'
                }
              >
                {stepsList.indexOf(each) + 1}
              </p>
            )}
            <p
              className={
                activeOptionId === each.stepId
                  ? 'selection-option active-selection-option'
                  : 'selection-option'
              }
            >
              {each.displayText}
            </p>
          </li>
        ))}
      </ul>
      <ul className="sm-side-bar-selection-option">
        {stepsList.map(each => (
          <li key={each.stepId}>
            <div
              className={
                activeOptionId === each.stepId
                  ? 'active-line active-line-color'
                  : 'active-line'
              }
            ></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBarOptions

// onClick={() => onChangeActiveOptionId(each.stepId)}
