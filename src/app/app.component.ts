import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterDeveloperComponent} from './greetings/components/register-developer/register-developer.component';
import {GreetDeveloperComponent} from './greetings/components/greet-developer/greet-developer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterDeveloperComponent, GreetDeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular-developer';

  public firstName: string ='';
  public lastName: string ='';

  public onDeveloperRegistered(developer: {firstName: string, lastName: string}) :void{
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }

  public onLater(): void {
    this.firstName = '';
    this.lastName = '';
  }


}
