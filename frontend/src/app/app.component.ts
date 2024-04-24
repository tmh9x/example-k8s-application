import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SysteminformationService } from './systeminformation.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('system') systemElm!: ElementRef;
  @ViewChild('os') osElm!: ElementRef;
  @ViewChild('memory') memoryElm!: ElementRef;
  @ViewChild('cpu') cpuElm!: ElementRef;

  public systemData: any;
  public osData: any;
  public memoryData: any;
  public cpuData: any;
  public buttons = ["system", "cpu", "memory", "os"];
  by: any;
  constructor(private systemservice: SysteminformationService) {
  }
  ngOnInit(): void {

    this.systemservice.getSystem().subscribe((data) => {
      this.systemData = data;
    });
    this.systemservice.getCpu().subscribe((data) => {
      this.cpuData = data;
    });
    this.systemservice.getMem().subscribe((data) => {
      this.memoryData = data;
    });
    this.systemservice.getOs().subscribe((data) => {
      this.osData = data;
    });
  }

  show(selector: string) {
    switch (selector) {
      case "system":
        this.systemElm.nativeElement.style.display = "block";
        this.osElm.nativeElement.style.display = "none";
        this.memoryElm.nativeElement.style.display = "none";
        this.cpuElm.nativeElement.style.display = "none";
        break;
      case "cpu":
        this.systemElm.nativeElement.style.display = "none";
        this.osElm.nativeElement.style.display = "none";
        this.memoryElm.nativeElement.style.display = "none";
        this.cpuElm.nativeElement.style.display = "block";
        break;
      case "memory":
        this.systemElm.nativeElement.style.display = "none";
        this.osElm.nativeElement.style.display = "none";
        this.memoryElm.nativeElement.style.display = "block";
        this.cpuElm.nativeElement.style.display = "none";
        break;
      case "os":
        this.systemElm.nativeElement.style.display = "none";
        this.osElm.nativeElement.style.display = "block";
        this.memoryElm.nativeElement.style.display = "none";
        this.cpuElm.nativeElement.style.display = "none";
        break;
    }
  }
}


