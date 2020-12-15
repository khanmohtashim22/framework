import React from 'react'

import Accordion from '../../../../components/accordion/Accordion'
import AccordionControl from '../../../../components/accordion/AccordionControl'
import AccordionContent from '../../../../components/accordion/AccordionContent'
import ExpandCollapseHeading from '../../../../components/expand-collapse/ExpandCollapseHeading'
import ExpandCollapseContent from '../../../../components/expand-collapse/ExpandCollapseContent'
import ExpandCollapseContainer from '../../../../components/expand-collapse/ExpandCollapseContainer'
import PanelContainer from '../../panel-container/PanelContainer'

const ExpandCollapsePanel = () => (
  <PanelContainer title="ExpandCollapse">
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
              Heading One Content
            </div>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>

      <Accordion>
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
              Heading Two Content
            </div>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>

      <Accordion open={true}>
        <AccordionControl>
          <ExpandCollapseHeading>
            <div>
              Initally Opened
            </div>
          </ExpandCollapseHeading>
        </AccordionControl>
        <AccordionContent>
          <ExpandCollapseContent>
            <div>
              Initally Opened Content
            </div>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionControl>
          <ExpandCollapseHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Duis eu dolor pharetra mauris feugiat efficitur eget in purus. 
              Sed maximus risus ut neque luctus venenatis id in nisi. 
              Nulla tempor, velit nec pulvinar venenatis, diam odio laoreet velit, consequat gravida mauris ante nec velit. 
              Nulla in augue efficitur, blandit velit sed, tristique sapien. 
              Donec nibh dui, dapibus quis lacinia vitae, condimentum a orci. 
              Ut tincidunt feugiat lobortis. Morbi viverra luctus sapien sed vestibulum.
            </p>
          </ExpandCollapseHeading>
        </AccordionControl>
        <AccordionContent>
          <ExpandCollapseContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Duis eu dolor pharetra mauris feugiat efficitur eget in purus. 
              Sed maximus risus ut neque luctus venenatis id in nisi. 
              Nulla tempor, velit nec pulvinar venenatis, diam odio laoreet velit, consequat gravida mauris ante nec velit. 
              Nulla in augue efficitur, blandit velit sed, tristique sapien. 
              Donec nibh dui, dapibus quis lacinia vitae, condimentum a orci. 
              Ut tincidunt feugiat lobortis. 
              Morbi viverra luctus sapien sed vestibulum. 
              Phasellus eget diam sed augue hendrerit condimentum sit amet id diam. 
              Proin at neque felis. 
              Duis in velit ullamcorper, mollis nisi eu, commodo nisl. 
              Sed ullamcorper, mauris ac lobortis consequat, velit ipsum vestibulum nunc, sit amet ullamcorper nunc ipsum euismod ligula. 
              Sed at aliquet est. 
              Integer faucibus orci non odio rhoncus, at pellentesque arcu efficitur. 
              Etiam justo orci, facilisis id libero id, sodales sagittis odio.
            </p>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>

    </ExpandCollapseContainer>
  </PanelContainer>
)

export default ExpandCollapsePanel