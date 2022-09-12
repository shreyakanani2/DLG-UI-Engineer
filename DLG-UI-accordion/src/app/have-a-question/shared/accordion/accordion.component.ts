//External Imports
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  // Holds Question Title
  @Input() label: string = '';

  // Holds Question Id
  @Input() id: string = '';

  // Use To Show/Hide Accordion Content
  public isHidden: boolean = true;

  constructor() { }

  ngOnInit() {}

}
