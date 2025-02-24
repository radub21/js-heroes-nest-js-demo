export abstract class StorageService {
  abstract readFile(path: string): void;
  abstract writeFile(path: string, content: string): void;
}
