import { Injectable } from '@angular/core';

export class Settings {
  constructor(public name: string, public theme: string) {}
}

@Injectable()
export class AppSettings {
  public settings = new Settings(
    'iian Commerce', // theme name
    'green' // green, blue, red, pink, purple, grey
  );
}
