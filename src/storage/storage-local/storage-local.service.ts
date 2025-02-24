import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageLocalService {
  public readFile(path: string) {
    console.log(`this method is reading from ${path} in local environment`);
  }

  public writeFile(path: string, content: string) {
    console.log(
      `this method is writing to ${path} with content ${content} in local environment`,
    );
  }
}
