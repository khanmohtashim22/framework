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
          <td>vertical</td>
          <td>When true, adds "flex-direction: column" to the container</td>
        </tr>
        <tr>
          <td>horizontal</td>
          <td>When true, adds "flex-direction: row" to the container</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td />
        </tr>
        <tr>
          <td>start</td>
          <td>When true, adds "align-items: flex-start" to the container</td>
        </tr>
        <tr>
          <td>center</td>
          <td>When true, adds "align-items: center" to the container</td>
        </tr>
        <tr>
          <td>end</td>
          <td>When true, adds "align-items: flex-end" to the container</td>
        </tr>
        <tr>
          <td>stretch</td>
          <td>When true, adds "align-items: stretch" to the container</td>
        </tr>
        <tr>
          <td>centered</td>
          <td>When true, adds "align-items: center; justify-content: center" to the container</td>
        </tr>
        <tr>
          <td>selfStart</td>
          <td>When true, adds "align-self: flex-start" to the container</td>
        </tr>
        <tr>
          <td>selfCenter</td>
          <td>When true, adds "align-self: flex-center" to the container</td>
        </tr>
        <tr>
          <td>selfEnd</td>
          <td>When true, adds "align-self: flex-end" to the container</td>
        </tr>
        <tr>
          <td>selfStretch</td>
          <td>When true, adds "align-self: stretch" to the container</td>
        </tr>
        <tr>
          <td>justifyStart</td>
          <td>When true, adds "justify-content: flex-start" to the container</td>
        </tr>
        <tr>
          <td>justifyCenter</td>
          <td>When true, adds "justify-content: center" to the container</td>
        </tr>
        <tr>
          <td>justifyEnd</td>
          <td>When true, adds "justify-content: flex-end" to the container</td>
        </tr>
        <tr>
          <td>justifyBetween</td>
          <td>When true, adds "justify-content: space-between" to the container</td>
        </tr>
        <tr>
          <td>justifyAround</td>
          <td>When true, adds "justify-content: space-around" to the container</td>
        </tr>
      </tbody>
    </table>
  </PanelContainer>
)

export default BlockPanel