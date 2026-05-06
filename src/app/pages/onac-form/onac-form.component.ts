import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-onac-form',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, HeaderComponent],
  templateUrl: './onac-form.component.html',
  styleUrl: './onac-form.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OnacFormComponent {
  form: FormGroup;
  modalAberto: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  abrirModal(): void {
    if (this.form.valid) {
      this.modalAberto = true;
    } else {
      this.marcarTodosCamposTocados();
    }
  }

  fecharModal(): void {
    this.modalAberto = false;
  }

  confirmarEnvio(): void {
    console.log('Formulário enviado:', this.form.value);
    this.modalAberto = false;
    alert('Formulário enviado com sucesso!');
    // Opcional: navegar para tela de sucesso
    // this.router.navigate(['/onac']);
  }

  voltar(): void {
    this.router.navigate(['/onac']);
  }

  private marcarTodosCamposTocados(): void {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (fieldName === 'email' && field?.hasError('email')) {
      return 'Email inválido';
    }
    return '';
  }
}
