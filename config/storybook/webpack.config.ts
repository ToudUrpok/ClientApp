import path from 'path'
import { BuildPaths } from '../build/types/config'
import { Configuration, RuleSetRule, DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: Configuration }): Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // @ts-expect-error
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            // Silence the Storybook loaders for SVG files
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })
    config.module?.rules?.push(buildSvgLoader())
    config.module?.rules?.push(buildCssLoader(true))
    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API_BASE_URL__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook')
        }))

    return config
}
