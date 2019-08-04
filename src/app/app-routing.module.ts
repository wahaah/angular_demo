import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SichuanComponent } from './components/sichuan/sichuan.component';
import { ShanxiComponent } from './components/shanxi/shanxi.component';
import { MainComponent } from './components/main/main.component';
const routes: Routes = [
  {path: '', component: MainComponent,
   children: [
    {path: 'sichuan', component: SichuanComponent},
  ]
  // {path: '', component: AppComponent,


  },
  // {path: 'sichuan', component: SichuanComponent},
  // {path: '**', redirectTo: 'AppComponent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
