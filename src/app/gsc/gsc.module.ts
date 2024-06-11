import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page-component';
import { GSCListComponent } from './components/list/list.component';
import { GSCAddCharacterComponent } from './components/addCharacter/addCharacter.component';





@NgModule({
  declarations: [
    MainPageComponent,
    GSCListComponent,
    GSCAddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GSCModule { }
