import React from 'react'

import Accordion from '../../../components/accordion/Accordion'
import AccordionControl from '../../../components/accordion/AccordionControl'
import AccordionContent from '../../../components/accordion/AccordionContent'
import ExpandCollapseHeading from '../../../components/expand-collapse/ExpandCollapseHeading'
import ExpandCollapseContent from '../../../components/expand-collapse/ExpandCollapseContent'
import ExpandCollapseContainer from '../../../components/expand-collapse/ExpandCollapseContainer'
import Block from '../../../components/block/Block'

const ExpandCollapsePanel = () => (
  <Block p={16}>
    <ExpandCollapseContainer>
      <Accordion>
        <AccordionControl>
          <ExpandCollapseHeading>
            <div>
              Heading One
            </div>
          </ExpandCollapseHeading>
        </AccordionControl>
        <AccordionContent>
          <ExpandCollapseContent>
            <div>
              Conent One
            </div>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>

      <Accordion open={true}>
        <AccordionControl>
          <ExpandCollapseHeading>
            <div>
              Heading Two
            </div>
          </ExpandCollapseHeading>
        </AccordionControl>
        <AccordionContent>
          <ExpandCollapseContent>
            <div>
              Content Two
            </div>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>
    </ExpandCollapseContainer>
  </Block>
)

export default ExpandCollapsePanel