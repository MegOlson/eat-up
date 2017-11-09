export class UserDetails {
  public image: string = "";
  public favorites: string[] = ["favorites"];
  public addresses: string[] = ["addresses"];
  public userId: string = "";
  constructor(
    public email: string,
  ) { }
}
