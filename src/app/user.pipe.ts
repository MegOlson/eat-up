import { Pipe, PipeTransform } from '@angular/core';
import { UserDetails } from './user-details.model';
import { UserAuthService } from './user-auth.service';

@Pipe({
  name: 'user',
  pure: false
})
export class UserPipe implements PipeTransform {

  constructor(private userAuthService: UserAuthService){}

  transform(){
    
  }

}
