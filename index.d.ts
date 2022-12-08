
declare function writeFile (path: string, item: any, verbose?: boolean): Promise<string>
declare function readFile <T = string>(path: string, verbose?: boolean): Promise<T>
declare function mkDir (path: string, verbose?: boolean): Promise<string>

declare function json (name: string, item: any, verbose?: boolean): Promise<string>
declare function text (name: string, item: any, verbose?: boolean): Promise<string>
declare function custom (name: string, item: any, verbose?: boolean): Promise<string>

declare function stringify (item: any): string
declare function log (item: any): void

declare const _module: {
  stringify: typeof stringify
  export: {
    json: typeof json
    text: typeof text
    custom: typeof custom
  }
  log: typeof log
  writeFile: typeof writeFile
  mkDir: typeof mkDir,
  readFile: typeof readFile
}

export default _module
