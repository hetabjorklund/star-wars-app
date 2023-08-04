import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ActivatedRoute } from "@angular/router";
import { MockBuilder, MockService } from 'ng-mocks';
import { RouterTestingModule } from "@angular/router/testing";
import { CharacterService } from "../services/character.service";
import { HttpClientModule } from "@angular/common/http";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    return MockBuilder(ListComponent);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [CharacterService],
      imports: [RouterTestingModule, HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.activatedRoute = MockService<ActivatedRoute>(null);
    component.characterService = MockService<CharacterService>(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
