export class UserDetails {
  public image: string = "";
  public favorites: string[] = [];
  constructor(
    public name: string,
    public email: string,
  ) { }
}
