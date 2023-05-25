import { 
    ProgressPlugin, 
    WebpackPluginInstance, 
    DefinePlugin, 
    HotModuleReplacementPlugin 
} from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
        new DefinePlugin({
            __IS_DEV__: isDev,
        }),
    ];

    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}