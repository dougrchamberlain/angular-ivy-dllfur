import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loot-upload',
  templateUrl: './loot-upload.component.html',
  styleUrls: ['./loot-upload.component.css']
})
export class LootUploadComponent implements OnInit {
  location = '';
  lootDate: string = new Date().toISOString();
  lootType: 'treasure' | 'trash' | 'unknown';
  data: any;
  imageSrc: string;
  myForm: any;
  apiEndPoint: any = 'https://enuoc9kxwya630r.m.pipedream.net';
  loot: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.loot = {
      location: this.location,
      date: this.lootDate,
      type: this.lootType
    };
  }

  fileChange(event: any) {
    const reader = new FileReader();
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.loot.image = this.imageSrc;

        // this.myForm.patchValue({
        //   fileSource: reader.result
        // });

        let formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new HttpHeaders();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        let options = { headers };
        this.http
          .post(`${this.apiEndPoint}`, formData, options)
          .subscribe(
            data => console.log('success'),
            error => console.log(error)
          );
      };
    }
  }
}

interface loot {}
