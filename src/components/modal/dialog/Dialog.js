import React from 'react'

import Modal from '../Modal'
import Header from '../support/header/Header'
import Content from '../support/content/Content'
import Footer from '../support/footer/Footer'
import Block from '../../block/Block'

import styles from './Dialog.module.scss'

const Dialog = ({ header, content, footer, ...restOfProps }) => {

  const HeaderContent = typeof header === 'string' ? () => header : header
  const BodyContent = typeof content === 'string' ? () => content : content
  const FooterContent = typeof footer === 'string' ? () => footer : footer

  return (
    <Modal {...restOfProps}>
      <Block layout={true} vertical={true} className={styles.container}>
        <Header>
          <HeaderContent />
        </Header>
        <Content>
          <BodyContent />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Block>
    </Modal>
  )
}

export default Dialog