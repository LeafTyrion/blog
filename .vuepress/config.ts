import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
    title: 'leaf\'s brain',
    description: 'you can find something in here',
    theme: recoTheme({
        style: '@vuepress-reco/style-default',
        logo: '/ghost.png',
        author: 'yyq',
        docsRepo: 'https://github.com/LeafTyrion/blog',
        docsBranch: 'main',
        docsDir: 'example',
        lastUpdatedText: '',
        // series 为原 sidebar
        series: {
            '/docs/theme-reco/': [
                {
                    text: 'module one',
                    children: ['home', 'theme']
                },
                {
                    text: 'module two',
                    children: ['api', 'plugin']
                }
            ]
        },
        navbar:
            [
                {text: '首页', link: '/'},
                {text: '笔记', link: '/categories/reco/1/'},
                {
                    text: '博客',
                    children: [
                        {text: 'vuepress-reco', link: '/docs/theme-reco/theme'},
                        {text: 'vuepress-theme-reco', link: '/blogs/other/guide'}
                    ]
                },
                {
                    text: '标签',
                    link: '/tags/tag1/1/'
                },
            ],
    }),
})
