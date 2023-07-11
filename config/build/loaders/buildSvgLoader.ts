import { RuleSetRule } from 'webpack'

export function buildSvgLoader (): RuleSetRule {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
}
