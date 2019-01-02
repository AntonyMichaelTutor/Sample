import { TestBed, inject } from '@angular/core/testing';

import { FileNameService } from './file-name.service';

describe('FileNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileNameService]
    });
  });

  it('should be created', inject([FileNameService], (service: FileNameService) => {
    expect(service).toBeTruthy();
  }));
});
