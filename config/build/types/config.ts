export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    APIBaseURL: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    APIBaseURL: string
    project: 'app' | 'storybook' | 'jest'
}
