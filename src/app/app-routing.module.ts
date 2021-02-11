import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewerComponent } from 'src/app/pages/blockchain-viewer/blockchain-viewer.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { CreateTransactionComponent } from 'src/app/pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from 'src/app/pages/pending-transactions/pending-transactions.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';

// I have no time to implement routing with module

const routes: Routes = [
  {
    path: '',
    component: BlockchainViewerComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'new/transaction',
    component: CreateTransactionComponent
  },
  {
    path: 'new/transaction/pending',
    component: PendingTransactionsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
