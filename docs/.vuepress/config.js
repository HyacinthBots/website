const {defaultTheme} = require("vuepress")

module.exports = {
    lang: 'en-US',
    title: 'HyacinthBots',
    description: 'Discord bots, open source, free, forever.',

    theme: defaultTheme({
            navbar: [
                {
                    text: 'Home',
                    link: '/'
                },
                {
                    text: 'About',
                    link: "/about.md"
                },
                {
                    text: 'Bots',
                    children: ['/bots/lily.md']
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
                    link: '/bots/bots.md',
                    children: [
                        {
                            text: 'Lily',
                            link: '/bots/lily.md',
                            children: [
                                {
                                    text: 'GitHub',
                                    link: 'https://github.com/IrisShaders/LilyBot' // TODO update to new links
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
}
