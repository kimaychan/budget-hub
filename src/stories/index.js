import { storiesOf } from '@storybook/vue';
import Wallet from './../components/wallet.vue';
import WalletList from "./../components/wallet-list.vue"
import WalletForm from "./../components/wallet-form.vue"

import Transaction from "./../components/transaction.vue"
import TransactionList from "./../components/transaction-list.vue"
import TransactionForm from "./../components/transaction-form.vue"

import SideNav from "./../components/side-nav.vue"

import Modal from "./../components/modal.vue"

const transaction = { 
  purpose: 'bill', 
  date: 'Aug. 8, 2019', 
  destination: 'Globe', 
  amountValue: '1000', 
  amountCurrency: 'PHP' 
}

storiesOf("Wallet", module)
  .add('wallet', () => ({
    components: { Wallet },
    template: '<wallet name="php wallet" balance="1000" currency="P"></wallet>'
  }))
  .add('wallet list', () => ({
    components: { WalletList },
    template: `<wallet-list 
        :wallets="[
          { name:'php wallet', balance:'1000', currency:'P'}, 
          { name:'php wallet', balance:'1000', currency:'P'},
          { name:'php wallet', balance:'1000', currency:'P'}
        ]"
      ></wallet-list>`
  }))


storiesOf("Transaction", module)
  .add('transaction', () => ({
    components: { Transaction },
    template: `<transaction 
      purpose="bill" 
      date="Aug. 8, 2019" 
      destination="Globe"
      amount-value= "1000"
      amount-currency="P"></transaction>`
  }))
  .add('transaction list', () => ({
    components: { TransactionList },
    template: `<transaction-list 
      :transactions="[
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 8, 2019', destination: 'Globe'}, 
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 8, 2019', destination: 'Globe'},
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 8, 2019', destination: 'Globe'}
      ]"
    ></transaction-list>`
  }))

storiesOf("Navs", module)
  .add('side-nav', () => ({
    components: { SideNav },
    template: '<side-nav></side-nav>'
  }))

storiesOf("Modals", module)
  .add('modal', () => ({
    components: { Modal },
    template: '<modal> hello world </modal>'
  }))

storiesOf("Forms", module)
  .add('wallet-form', () => ({
    components: { WalletForm },
    template: '<wallet-form></wallet-form>'
  }))
  .add('wallet-form-modal', () => ({
    components: { WalletForm, Modal },
    template: '<modal><wallet-form><wallet-form></modal>'
  }))
  .add('transaction-form', () => ({
    components: { TransactionForm },
    template: '<transaction-form></transaction-form>'
  }))
  .add('transaction-form-modal', () => ({
    components: { TransactionForm, Modal },
    template: '<modal><transaction-form><transaction-form></modal>'
  }))
