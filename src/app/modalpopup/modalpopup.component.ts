import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  standalone: true,
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss'],
})
export class ModalpopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  imgSrc: any = this.data.modalmg;
  result: any = this.data;
  ngOnInit(): void {}
}
