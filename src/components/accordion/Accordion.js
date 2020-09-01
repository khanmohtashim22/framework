import React from 'react'
import PropTypes from 'prop-types'

import AccordionContent from './accordion-content/AccordionContent'
import AccordionControl from './accordion-control/AccordionControl'

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