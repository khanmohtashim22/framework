import React from 'react'
import PropTypes from 'prop-types'

const AccordionControl = ({ children, handleClick, open }) => {
  const clonedChildren = React.Children.map(children, child => React.cloneElement(child, { open }))
  return (
    <div onClick={handleClick}>
      {clonedChildren}
    </div>
  )
}

AccordionControl.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func
}

const AccordionContent = ({ children, open }) => open ? (
  <>
    {children}
  </>
) : null


AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool
}


class Accordion extends React.Component {

  static Content = AccordionContent
  static Control = AccordionControl

  constructor(props) {
    super(props)
    this.state = {
      open: props.open || false
    }
  }

  handleClick = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { children } = this.props
    const { open } = this.state
    
    const clonedChildren = React.Children.map(children, child => React.cloneElement(child, { 
      open, 
      handleClick: this.handleClick
    }))
   
    return (
      <>
        {clonedChildren}
      </>
    )
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Accordion