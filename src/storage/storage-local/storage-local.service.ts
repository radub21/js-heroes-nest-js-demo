import { Injectable } from '@nestjs/common';
import { BaseStorage } from '../base-storage';

@Injectable()
export class StorageLocalService implements BaseStorage {
  public write() {
    console.log('writing locally');
  }

  public read() {
    console.log('reading locally');
  }
}
