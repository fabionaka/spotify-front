import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule
  ],
  exports: [MatInputModule, MatSelectModule, MatIconModule, FormsModule],
  providers: []
})
export class SharedModule { }
