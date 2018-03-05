import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IntPhonePrefixComponent} from "./component/int-phone-prefix/int-phone-prefix.component";
import {OnlyNumberDirective} from "./directive/only-number.directive";
import {CountryPipe} from "./pipe/country.pipe";
import {CountryService} from "./service/country.service";
import {LocaleService} from "./service/locale.service";
import { MatInputModule, MatIconModule, MatSelectModule } from "@angular/material";
import {FocusMonitor} from '@angular/cdk/a11y';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
  declarations: [
    IntPhonePrefixComponent,
    OnlyNumberDirective,
    CountryPipe
  ],
  exports: [
    IntPhonePrefixComponent
  ],
  providers: [CountryService, LocaleService, FocusMonitor]
})
export class InternationalPhoneModule {}
