import {backToTopPlugin} from "@vuepress/plugin-back-to-top";
import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
    base: '/',
    lang: 'en-US',
    title: 'HyacinthBots',
    description: 'Discord bots, open source, free, forever.',

    theme: defaultTheme({
            logo: 'https://raw.githubusercontent.com/HyacinthBots/art/main/branding/icons/Hyacinth%20transparent%20icon.png',
            toggleColorMode: 'Toggle color mode',
            toggleSidebar: 'Toggle sidebar',
            contributors: false,
            notFound: ['The page you are looking for does not exist or has been moved!'],

            editLink: true,
            editLinkText: 'Help improve this page on GitHub',
            editLinkPattern: ':repo/edit/:branch/:path',

            docsRepo: 'https://github.com/HyacinthBots/website',
            docsBranch: 'main',
            docsDir: 'docs',

            navbar: [
                {
                    text: 'Home',
                    link: '/'
                },
                {
                    text: 'About',
                    link: '/about.md'
                },
                {
                    text: 'Bots',
                    children: [
                        {
                            text: "Lily",
                            link: '/bots/lily.md'
                        },
                        {
                            text: "Watchdog",
                            link: '/bots/watchdog.md'
                        }]
                }
            ],
            sidebar: [
                {
                    text: 'Home',
                    link: '/',
                },
                {
                    text: 'About',
                    link: '/about.md'
                },
                {
                    text: 'Bots',
                    link: '/bots.md',
                    children: [
                        {
                            text: 'Lily',
                            link: '/bots/lily.md',
                            children: [
                                {
                                    text: 'GitHub',
                                    link: 'https://github.com/HyacinthBots/LilyBot'
                                }
                            ]
                        },
                        {
                            text: 'Watchdog',
                            link: '/bots/watchdog.md',
                            children: [
                                {
                                    text: 'GitHub',
                                    link: 'https://github.com/HyacinthBots/watchdog'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ),

    plugins: [
        backToTopPlugin()
    ]
})
