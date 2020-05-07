import { PersonService } from '../person.service';
import { Person } from '../person';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();
  submitted = false;

  constructor(private employeeService: PersonService,
    private router: Router) { }

  ngOnInit() {
  }

  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
  }

  save() {
    this.employeeService.createPerson(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Persons?refresh=1']);
  }
}
