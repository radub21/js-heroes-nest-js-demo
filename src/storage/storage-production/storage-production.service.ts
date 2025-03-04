import { Injectable } from '@nestjs/common';
import { BaseStorage } from '../base-storage';

@Injectable()
export class StorageProductionService implements BaseStorage {
  public write() {
    console.log('writing in production');
  }

  public read() {
    console.log('reading in production');
  }
}
