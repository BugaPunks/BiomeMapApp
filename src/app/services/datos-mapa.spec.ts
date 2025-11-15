import { TestBed } from '@angular/core/testing';

import { DatosMapa } from './datos-mapa';

describe('DatosMapa', () => {
  let service: DatosMapa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosMapa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
