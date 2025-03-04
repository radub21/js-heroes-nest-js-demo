export abstract class BaseStorage {
  read(key: string): void {}
  write(content: string): void {}
}
