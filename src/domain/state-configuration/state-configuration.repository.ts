export abstract class StateConfigurationRepository {
  abstract get(extension: string, key: string): unknown;
  abstract update<T>(extension: string, key: string, value: T): Promise<void>;
  abstract remove(extension: string, key: string): void;
}
