import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  private auth = new UserService();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      pseudo: '',
      password: '',
    });
  }

  onSubmitForm(): void {
    const formValue = this.userForm.value;
    this.auth.setPseudoAndPassword(formValue.pseudo, formValue.password);
    this.authService.login(this.auth);
  }
}
