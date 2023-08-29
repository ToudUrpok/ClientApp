import path from 'path'
import { BuildPaths } from '../build/types/config'
import { Configuration, RuleSetRule, DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push(buildSvgLoader())
    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API_BASE_URL__: ''
        }))

    return config
}
