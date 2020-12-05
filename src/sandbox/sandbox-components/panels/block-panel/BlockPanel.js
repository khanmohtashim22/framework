import React from 'react'

import PanelContainer from '../../panel-container/PanelContainer'

import styles from './BlockPanel.module.scss'

const BlockPanel = () => (
  <PanelContainer title="Block">
    <table className={styles['props-table']}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>layout</td>
          <td>When true, adds "display: flex" to the container</td>
        </tr>
        <tr>
          <td>inline</td>
          <td>When true, adds "display: inline-flex" to the container</td>
        </tr>
        <tr>
          <td>flex</td>
          <td>When true, adds "flexGrow: 1; flexShrink: 1; flexBasis: '0%'" to the container</td>
        </tr>
        <tr>
          <td>flexBasis</td>
          <td>When true, adds "flexGrow: 1; flexBasis: '0%'" to the container</td>
        </tr>
        <tr>
          <td>flexAuto</td>
          <td>When true, adds "flexGrow: 1; flexShrink: 1; flexBasis: 'auto'" to the container</td>
        </tr>
        <tr>
          <td>flexNone</td>
          <td>When true, adds "flexGrow: 0; flexShrink: 0; flexBasis: 'auto'" to the container</td>
        </tr>
        <tr>
          <td>shrink</td>
          <td>When true, adds "flexShrink: 1" to the container</td>
        </tr>
        <tr>
          <td>noShrink</td>
          <td>When true, adds "flexShrink: 0" to the container</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>When true, adds "flexDirection: column" to the container</td>
        </tr>
        <tr>
          <td>horizontal</td>
          <td>When true, adds "flexDirection: row" to the container</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td />
        </tr>
        <tr>
          <td>start</td>
          <td>When true, adds "alignItems: flex-start" to the container</td>
        </tr>
        <tr>
          <td>center</td>
          <td>When true, adds "alignItems: center" to the container</td>
        </tr>
        <tr>
          <td>end</td>
          <td>When true, adds "alignItems: flex-end" to the container</td>
        </tr>
        <tr>
          <td>stretch</td>
          <td>When true, adds "alignItems: stretch" to the container</td>
        </tr>
        <tr>
          <td>centered</td>
          <td>When true, adds "alignItems: center; justifyContent: center" to the container</td>
        </tr>
        <tr>
          <td>selfStart</td>
          <td>When true, adds "alignSelf: flex-start" to the container</td>
        </tr>
        <tr>
          <td>selfCenter</td>
          <td>When true, adds "alignSelf: flex-center" to the container</td>
        </tr>
        <tr>
          <td>selfEnd</td>
          <td>When true, adds "alignSelf: flex-end" to the container</td>
        </tr>
        <tr>
          <td>selfStretch</td>
          <td>When true, adds "alignSelf: stretch" to the container</td>
        </tr>
        <tr>
          <td>justifyStart</td>
          <td>When true, adds "justifyContent: flex-start" to the container</td>
        </tr>
        <tr>
          <td>justifyCenter</td>
          <td>When true, adds "justifyContent: center" to the container</td>
        </tr>
        <tr>
          <td>justifyEnd</td>
          <td>When true, adds "justifyContent: flex-end" to the container</td>
        </tr>
        <tr>
          <td>justifyBetween</td>
          <td>When true, adds "justifyContent: space-between" to the container</td>
        </tr>
        <tr>
          <td>justifyAround</td>
          <td>When true, adds "justifyContent: space-around" to the container</td>
        </tr>
      </tbody>
    </table>
  </PanelContainer>
)

export default BlockPanel