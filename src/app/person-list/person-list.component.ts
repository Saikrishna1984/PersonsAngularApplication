import { PersonDetailsComponent } from './../person-details/person-details.component';
import { Observable } from "rxjs";
import { PersonService } from "./../person.service";
import { Person } from "./../person";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"]
})
export class PersonListComponent implements OnInit {
  employees: Observable<Person[]>;

  constructor(private employeeService: PersonService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getPersonsList();
  }

  deletePerson(id: number) {
    this.employeeService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePerson(id: number){
    this.router.navigate(['update', id]);
  }
}
