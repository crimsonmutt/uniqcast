import { FormControl, FormGroup } from '@angular/forms';

export class UrlValidator{
    static validURL(control: FormControl){
        if(control.value == "") return null;
        else if(control.value.substring(0, 8) == "https://") return null;
        else if(control.value.substring(0, 7) == "http://") return null;
        else return {invalidURL: control.value}
    }
}
