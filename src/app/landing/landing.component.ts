import { Component, OnInit } from '@angular/core';
import { RestService } from "src/app/shared/rest";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  apiResponse: any;
  constructor(
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.restService.landing().subscribe((data) => {
      this.apiResponse = data
    });
  }

}
