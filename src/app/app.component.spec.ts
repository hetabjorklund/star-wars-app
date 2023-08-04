import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CharacterService } from "./services/character.service";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [CharacterService],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
