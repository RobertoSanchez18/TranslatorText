import { Component, OnInit, effect } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { TranslationResponseDto } from '../../models/translationDTO.model';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.css'
})
export class TranslatorComponent implements OnInit {

  translationForm: FormGroup = new FormGroup<any>('');
  translationData!: TranslationResponseDto | null;
  
  constructor(private translationService: TranslationService, private formBuilder: FormBuilder) {
    effect(() => {
      this.translationData = this.translationService.selectedTranslation();
      if (this.translationData) {
        this.translationForm.patchValue(this.translationData);
      }
    })
   }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    if (this.translationForm.invalid) return;

    if (this.translationData) {
      this.update(this.translationData.id);
    } else {
      this.insert();
    }
  }

  insert() {
    this.translationService.insert(this.translationForm.value).subscribe((res) => {
      console.log(res);
      this.translationForm.patchValue({
        translation: res.translation
      });
    });
  }

  update(id: number) {
    this.translationService.update(id, this.translationForm.value).subscribe((res) => {
      console.log(res);
      this.translationForm.patchValue({
        translation: res.translation
      });
    });
  }

  initForm() {
    this.translationForm = this.formBuilder.group({
      translator: ['', [Validators.required]],
      toTranslation: ['', [Validators.required]],
      translation: ['']
    });
  }

  cancelEdit() {
    this.translationService.clearSelected();//Limpia variable
    this.translationForm.reset();//Limpia variable
  }

}
