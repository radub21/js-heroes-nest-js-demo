import { Injectable } from '@nestjs/common';
import { StorageService } from '../storage.service';

@Injectable()
export class StorageProductionService implements StorageService {
  public readFile(path: string) {
    console.log(
      `this method is reading from ${path} in production environment`,
    );
  }

  public writeFile(path: string, content: string) {
    console.log(
      `this method is writing to ${path} with content ${content} in production environment`,
    );
  }
}
