import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";

  columnDefs = [
    { headerName: "make", field: "make", sortable: true, filter: true },
    { headerName: "model", field: "model", sortable: true, filter: true },
    { headerName: "price", field: "price", sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get("https://api.myjson.com/bins/15psn9");
  }
}
