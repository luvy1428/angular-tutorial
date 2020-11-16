import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs{
  newValue : boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isSelected : boolean;
  @Output('change') click = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected; 
    //console.log('isSelected: ',this.isSelected);
    this.click.emit({newValue : this.isSelected});
  }

}
