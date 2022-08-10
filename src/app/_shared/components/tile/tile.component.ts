import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@firebase/firestore';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  // Required Inputs
  @Input() description!: string;
  @Input() amount!: number;
  @Input() dateCreated!: Timestamp;
  @Input() category!: string;
  @Input() verified!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
