import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  addForm! : FormGroup;

  constructor(private formBuilder : FormBuilder,private regService : ServiceWorkerRegistration) { }

  ngOnInit(): void {
  }

}
