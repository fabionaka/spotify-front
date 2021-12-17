import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    AppRoutingModule
  ],
  exports: [MatInputModule, MatSelectModule, MatIconModule, FormsModule, NavComponent],
  providers: []
})
export class SharedModule { }
