import { Component, OnInit } from '@angular/core';
import { BlockchainService, IWalletKey } from 'src/app/services/blockchain.service';
import { Transaction } from 'savjeecoin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx = new Transaction();
  public walletKey: IWalletKey;

  constructor(private blockchainService: BlockchainService, private router: Router) {
    this.newTx = new Transaction();
    this.walletKey = blockchainService.walletKeys[0];
   }

  ngOnInit(): void {
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);
    try {
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }
    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();
  }

}
