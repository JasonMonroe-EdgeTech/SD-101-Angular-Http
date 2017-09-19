import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {MyDataObject} from './data';

@Injectable()
export class DataService{

  private dataURL = 'https://saveData.php';

  constructor(private http: Http){}

 saveData(myData: MyDataObject):void{

 }



  getData():Promise<MyDataObject>{

    return this.http.get(this.dataURL)
              .toPromise()
              .then(response=>response.json() as MyDataObject)
              .catch(this.handleError);
  }

  handleError():void{

  }
}
