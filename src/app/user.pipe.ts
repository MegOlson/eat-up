import { Pipe, PipeTransform } from '@angular/core';
import { UserDetails } from './user-details.model';
import { UserAuthService } from './user-auth.service';

@Pipe({
  name: 'user',
  pure: false
})
export class UserPipe implements PipeTransform {

  constructor(private userAuthService: UserAuthService){}

  transform(input: UserDetails[]){
    let output: UserDetails[] = [];
    let email = this.userAuthService.getUserEmail();
    console.log("input", input)
    for(let i = 0; i < input.length; i ++){
      if(input[i].email === email) {
        output.push(input[i]);
      }
    }
    console.log("output", output)
    return output
  }

}
