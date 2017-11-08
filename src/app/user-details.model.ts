export class UserDetails {
  public image: string = '../../assets/images/user.png';
  public favorites: string[] = [];
  constructor(
    public email: string,
  ) { }
}
