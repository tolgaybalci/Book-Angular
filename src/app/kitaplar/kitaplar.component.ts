import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {PojoService} from '../pojo.service';

@Component({
  selector: 'app-kitaplar',
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.css']
})
export class KitaplarComponent implements OnInit {

  kitaplar: any;
  stateKitapEkleme = false;

  kitapForm: FormGroup;
  displayKitap = false;
  displayingKitap: any;

  updateKitap: any;
  submitButtonText = 'Kitap Ekle';
  date1: Date;
  baskiTurleri: any;
  kitapTurleri: any;

  constructor(@Inject(HttpClient) private httpClient: HttpClient, @Inject(PojoService) private pojoService: PojoService) {
    this.kitapForm = new FormGroup({
      kitapIsmi: new FormControl(),
      kitapYazari: new FormControl(),
      basimYeri: new FormControl(),
      basimTarihi: new FormControl(),
      editor: new FormControl(),
      kitapTuru: new FormControl(),
      fiyat: new FormControl(),
      baskiSayisi: new FormControl(),
      etiketNumarasi: new FormControl(),
      baskiTuru: new FormControl(),
      aciklama: new FormControl(),
      onsoz: new FormControl(),
      yazarinBiyografisi: new FormControl(),
      isbn_Numarasi: new FormControl(),
    });


  }

  ngOnInit() {

    this.pojoService.get('kitaplar/get-baski-turleri').subscribe(
      (result) => {
        this.baskiTurleri = result;
      }
    );

    this.httpClient.get('http://localhost:8080/kitaplar/get-kitap-turleri').subscribe(
      (result) => {
        this.kitapTurleri = result;
      }
    );

    this.httpClient.get('http://localhost:8080/kitaplar').subscribe(
      (result) => {
        this.kitaplar = result;
      }
    );
  }

  onSubmit() {
    if (this.updateKitap) {
      this.kitapForm.value.id = this.updateKitap.id;
      this.httpClient.put(`http://localhost:8080/kitaplar/update`, this.kitapForm.value).subscribe(
        (next) => {
          this.httpClient.get('http://localhost:8080/kitaplar').subscribe(
            (result) => {
              this.kitaplar = result;
              this.updateKitap = null;
              this.kitapForm.reset();
              this.submitButtonText = 'Kitap Ekle';
            }
          );
        }
      ) ;
    } else {
      this.httpClient.post('http://localhost:8080/kitaplar', this.kitapForm.value).subscribe(
        (next) => {
          this.httpClient.get('http://localhost:8080/kitaplar').subscribe(
            (result) => {
              this.kitaplar = result;
              this.kitapForm.reset();
              this.stateKitapEkleme = false;
            }
          );
        }
      );
    }

  }

  onDelete(id: string) {
    this.httpClient.delete(`http://localhost:8080/kitaplar/kitap/${id}`, this.kitapForm.value).subscribe(
      (next) => {
        this.httpClient.get('http://localhost:8080/kitaplar').subscribe(
          (result) => {
            this.kitaplar = result;
          }
          );
         }
      );
  }

  onDisplay(id: string) {
    this.httpClient.get(`http://localhost:8080/kitaplar/${id}`).subscribe(
      (next) => {
        this.displayingKitap = next;
        this.displayKitap = true;
      }
    );
  }

  onUpload(id: string) {

    this.submitButtonText = 'Güncelle';

    this.stateKitapEkleme = true;
    this.httpClient.get(`http://localhost:8080/kitaplar/${id}`).subscribe(
      (next) => {
        this.updateKitap = next;
        this.kitapForm.controls.kitapIsmi.setValue(this.updateKitap.kitapIsmi);
        this.kitapForm.controls.kitapYazari.setValue(this.updateKitap.kitapYazari);
        this.kitapForm.controls.basimYeri.setValue(this.updateKitap.basimYeri);
        this.kitapForm.controls.editor.setValue(this.updateKitap.editor);
        this.kitapForm.controls.kitapTuru.setValue(this.updateKitap.kitapTuru);
        this.kitapForm.controls.fiyat.setValue(this.updateKitap.fiyat);
        this.kitapForm.controls.baskiSayisi.setValue(this.updateKitap.baskiSayisi);
        this.kitapForm.controls.etiketNumarasi.setValue(this.updateKitap.etiketNumarasi);
        this.kitapForm.controls.baskiTuru.setValue(this.updateKitap.baskiTuru);
        this.kitapForm.controls.aciklama.setValue(this.updateKitap.aciklama);
        this.kitapForm.controls.onsoz.setValue(this.updateKitap.onsoz);
        this.kitapForm.controls.yazarinBiyografisi.setValue(this.updateKitap.yazarinBiyografisi);
        this.kitapForm.controls.isbn_Numarasi.setValue(this.updateKitap.isbn_Numarasi);
      }
    );

  }
}

