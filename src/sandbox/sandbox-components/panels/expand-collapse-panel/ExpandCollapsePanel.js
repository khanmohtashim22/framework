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
            <div>
              Single Nested
            </div>
          </ExpandCollapseHeading>
        </AccordionControl>
        <AccordionContent>
          <ExpandCollapseContent>
            <Accordion>
              <AccordionControl>
                <ExpandCollapseHeading>
                  <div>
                    Single Nested Header
                  </div>
                </ExpandCollapseHeading>
              </AccordionControl>
              <AccordionContent>
                <ExpandCollapseContent>
                  <div>
                    Single Nested Header Content
                  </div>
                </ExpandCollapseContent>
              </AccordionContent>
            </Accordion>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionControl>
          <ExpandCollapseHeading>
            <div>
              Multi Nested
            </div>
          </ExpandCollapseHeading>
        </AccordionControl>
        <AccordionContent>
          <ExpandCollapseContent>
            <Accordion>
              <AccordionControl>
                <ExpandCollapseHeading>
                  <div>
                    Mulit Nested Header One
                  </div>
                </ExpandCollapseHeading>
              </AccordionControl>
              <AccordionContent>
                <ExpandCollapseContent>
                  <div>
                    Mulit Nested Header One Content
                  </div>
                </ExpandCollapseContent>
              </AccordionContent>
            </Accordion>
            <Accordion>
              <AccordionControl>
                <ExpandCollapseHeading>
                  <div>
                    Muli Nested Header Two
                  </div>
                </ExpandCollapseHeading>
              </AccordionControl>
              <AccordionContent>
                <ExpandCollapseContent>
                  <div>
                    Muli Nested Header Two Content
                  </div>
                </ExpandCollapseContent>
              </AccordionContent>
            </Accordion>
          </ExpandCollapseContent>
        </AccordionContent>
      </Accordion>
      
    </ExpandCollapseContainer>
  </PanelContainer>
)

export default ExpandCollapsePanel