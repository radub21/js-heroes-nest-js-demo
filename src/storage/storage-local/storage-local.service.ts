import { Injectable } from '@nestjs/common';
import { StorageService } from '../storage.service';

@Injectable()
export class StorageLocalService implements StorageService {
  public readFile(path: string) {
    console.log(`this method is reading from ${path} in local environment`);
  }

  public writeFile(path: string, content: string) {
    console.log(
      `this method is writing to ${path} with content ${content} in local environment`,
    );
  }
}
