import { AbstractControl, ValidationErrors } from '@angular/forms';

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;

  if (!email) return null; 
  
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email) ? null : { emailInvalido: true };
}