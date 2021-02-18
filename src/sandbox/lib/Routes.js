import WelcomePanel from '../sandbox-components/panels/welcome-panel/WelcomePanel'
import BlockPanel from '../sandbox-components/panels/block-panel/BlockPanel'
import ExpandCollapsePanel from '../sandbox-components/panels/expand-collapse-panel/ExpandCollapsePanel'
import ButtonPanel from '../sandbox-components/panels/button-panel/ButtonPanel'
import ModalPanel from '../sandbox-components/panels/modal-panel/ModalPanel'

const Routes = [
  { path: '/', component: WelcomePanel, name: 'Welcome' },
  { path: '/block', component: BlockPanel, name: 'Block' },
  { path: '/button', component: ButtonPanel, name: 'Button' },
  { path: '/expand-collapse', component: ExpandCollapsePanel, name: 'ExpandCollapse' },
  { path: '/modal', component: ModalPanel, name: 'Modal' }
]

export default Routes