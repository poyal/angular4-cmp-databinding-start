import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreate') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreate') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint() {
  //   console.log('IN');
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }
}
