import { storiesOf } from '@storybook/vue';
import Wallet from './../components/wallet.vue';
import WalletList from "./../components/wallet-list.vue"

import Transaction from "./../components/transaction.vue"
import TransactionList from "./../components/transaction-list.vue"

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
      amount="{ value: '1000', currency: 'PHP '}"></transaction>`
  }))
  .add('transaction list', () => ({
    components: { TransactionList },
    template: `<transaction-list
        :transactions="[{
          purpose: 'bill',
          date:'Aug. 8, 2019',
          destination: 'Globe',
          amount: '{ value: "1000", currency: "P"}'
        }]">
        </transaction-list>
      `
  }))