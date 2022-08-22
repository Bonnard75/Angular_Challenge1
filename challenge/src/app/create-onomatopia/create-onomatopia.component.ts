import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent implements OnInit {
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  createOnomatopia(onomatopiaInput: string): void {
    this.sendOnomatopiaToParent.emit(onomatopiaInput);
  }
}