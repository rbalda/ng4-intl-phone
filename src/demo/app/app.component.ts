import {Component, OnInit} from '@angular/core';
import {CountryService} from 'quickstart-lib';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'demo-app',
    template: `
    <div>
        <int-phone-prefix [(ngModel)]="phoneValue"
		[locale]="'es'"
		[defaultCountry]="'ec'"
            [maxLength]="30"
            [placeholder]="'telefono'"></int-phone-prefix>
    </div>
  `,
})
export class AppComponent implements OnInit {
    phoneValue: string;
    private myForm: FormGroup;

    constructor(libService: CountryService,
                private formBuilder: FormBuilder) {
        this.phoneValue = '123345456';
    }


    ngOnInit() {
        this.myForm = this.formBuilder.group({
            myPhone: ['', Validators.required],
            disabledPhone: ['']
        });

        this.myForm.get('disabledPhone').disable();
    }

    logForm(value: any) {
        console.log(value);
    }
}
