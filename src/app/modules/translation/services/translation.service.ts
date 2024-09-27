import { TranslationResponseDto, TranslationRequestDto } from './../models/translationDTO.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  selectedTranslation: WritableSignal<TranslationResponseDto | null> = signal(null);

  constructor(private http: HttpClient) { }

  url = environment.urlBase + '/translations';

  getAll() {
    return this.http.get<TranslationResponseDto[]>(this.url);
  }

  getActive() {
    return this.http.get<TranslationResponseDto[]>(this.url + '/activos');
  }

  getInactive() {
    return this.http.get<TranslationResponseDto[]>(this.url + '/inactivos');
  }

  getForId(id: number) {
    return this.http.get<TranslationResponseDto>(this.url + '/' + id);
  }

  insert(TranslationRequestDto: any) {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '1c9b1c40543f410d80b1a8afc07871c8',
      'Ocp-Apim-Subscription-Region': 'eastus2'
    });
    return this.http.post<TranslationResponseDto>(this.url, TranslationRequestDto, { headers });
  }

  update(id: number, TranslationRequestDto: any) {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '1c9b1c40543f410d80b1a8afc07871c8',
      'Ocp-Apim-Subscription-Region': 'eastus2'
    });
    return this.http.put<TranslationResponseDto>(this.url + '/' + id, TranslationRequestDto, { headers });
  }

  remove(id: number) {
    return this.http.delete<void>(this.url + '/remover/' + id);
  }

  restore(id: number) {
    return this.http.delete<void>(this.url + '/restaurar/' + id);
  }

  delete(id: number) {
    return this.http.delete<void>(this.url + '/' + id);
  }

  clearSelected() {
    this.selectedTranslation.set(null);
  }

}
