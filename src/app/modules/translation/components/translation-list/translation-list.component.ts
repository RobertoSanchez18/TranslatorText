import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslationResponseDto } from '../../models/translationDTO.model';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrl: './translation-list.component.css'
})
export class TranslationListComponent implements OnInit {

  translations: TranslationResponseDto[] = [];
  inactiveTranslations: TranslationResponseDto[] = [];
  showActive = true; 


  page = 1;
  pageSize = 5;
  pagedTranslations: TranslationResponseDto[] = [];

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.getActive();
  }

  getActive() {
    this.translationService.getActive().subscribe((res) => {
      this.translations = res;
      this.refreshPagedTranslations(); 
      this.showActive = true;
    })
  }

  loadInactiveTranslations() { 
    this.translationService.getInactive().subscribe(data => { 
      this.translations = data;
      this.refreshPagedTranslations();
      this.showActive = false;
    })
  }

  refreshPagedTranslations() {
    this.pagedTranslations = this.translations.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  deleteTranslation(id: number) { 
    this.translationService.remove(id).subscribe(data => { 
      console.log(`Translation delete with id: ${id}`)
      this.getActive();
    })
  }

  restoreTranslation(id: number) { 
    this.translationService.restore(id).subscribe(data => { 
      console.log(`Translation restore with id: ${id}`)
      this.loadInactiveTranslations();
    })
  }

  editTranslation(translation: TranslationResponseDto) {
    console.log('Transalation', translation);
    this.translationService.selectedTranslation.set(translation);
    window.scroll(0, 0);
  }

}
