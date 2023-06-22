export interface HashCompare {
    compare(plainText: string, hash: string): Promise<boolean> | boolean
}