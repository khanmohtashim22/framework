import React from 'react'

import Accordion from '../../../components/accordion/Accordion'
import ExpandCollapseHeading from '../../../components/expand-collapse/ExpandCollapseHeading'
import ExpandCollapseContent from '../../../components/expand-collapse/ExpandCollapseContent'
import ExpandCollapseContainer from '../../../components/expand-collapse/ExpandCollapseContainer'

import styles from './ExpandCollapsePanel.module.scss'

const ExpandCollapsePanel = () => (
  <div className={styles.container}>
    <ExpandCollapseContainer>
      <Accordion>
        <Accordion.Control>
          <ExpandCollapseHeading>
            <div>
              Heading One
            </div>
          </ExpandCollapseHeading>
        </Accordion.Control>
        <Accordion.Content>
          <ExpandCollapseContent>
            <div>
              Conent One
            </div>
          </ExpandCollapseContent>
        </Accordion.Content>
      </Accordion>

      <Accordion>
        <Accordion.Control>
          <ExpandCollapseHeading>
            <div>
              Heading Two
            </div>
          </ExpandCollapseHeading>
        </Accordion.Control>
        <Accordion.Content>
          <ExpandCollapseContent>
            <div>
              Content Two
            </div>
          </ExpandCollapseContent>
        </Accordion.Content>
      </Accordion>
    </ExpandCollapseContainer>
  </div>
)

export default ExpandCollapsePanel