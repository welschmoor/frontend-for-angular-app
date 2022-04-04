import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {
  @Output() applied = new EventEmitter()
  form: FormGroup
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Age18: [],
      Age30: [],
      Age40: [],
    })
  }

  
  submit(value: any) {
    const types = Object.keys(value)
      .filter(item => {
        return value[item]
      })
    this.applied.emit(types)
  }
  


}
