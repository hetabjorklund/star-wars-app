import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { CharacterService } from "../services/character.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [CreateCharacterComponent],
      providers: [CharacterService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
