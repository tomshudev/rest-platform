import { TestBed, inject } from '@angular/core/testing';

import { ItemModalService } from './item-modal.service';

describe('ItemModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemModalService]
    });
  });

  it('should be created', inject([ItemModalService], (service: ItemModalService) => {
    expect(service).toBeTruthy();
  }));
});
