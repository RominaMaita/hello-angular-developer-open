import {Component, EventEmitter, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-developer',
  imports: [ReactiveFormsModule],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {

  public developerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  @Output() public developerRegistered = new EventEmitter<{firstName: string, lastName: string}>();

  @Output() public later = new EventEmitter<void>();

  public onRegistered(): void {

    if(this.developerForm.valid){
      const firstName = this.developerForm.value.firstName ?? '';
      const lastName = this.developerForm.value.lastName ?? '';
      this.developerRegistered.emit({firstName, lastName});
      this.developerForm.reset();
    }
  }

  public onLater(): void {
    this.developerForm.reset();
    this.later.emit();
  }

  public onClear(): void {
    this.developerForm.reset();
  }

}
