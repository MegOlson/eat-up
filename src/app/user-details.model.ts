export class UserDetails {
  public image: string = "";
  public favorites: string[] = ["favorites"];
  public userId: string = "";
  constructor(
    public email: string,
  ) { }
}
