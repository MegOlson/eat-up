export class UserDetails {
  public image: string = "";
  public favorites: string[] = ["favorites"];
  public userId: string = "";
  public addresses: string[] = ["addresses"];
  constructor(public email: string) {}
}
