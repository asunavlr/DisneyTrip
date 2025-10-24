declare module '@lumi.new/sdk' {
  // Minimal typing to satisfy TS. Replace with real SDK types if available.
  export function createClient(config: {
    projectId: string
    apiBaseUrl?: string
    authOrigin?: string
    [key: string]: any
  }): any
}