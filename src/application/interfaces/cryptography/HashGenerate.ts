export interface HashGenerate{
    hash(data: string) : Promise<string> | string
}