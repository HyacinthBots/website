const {defaultTheme} = require("vuepress")

module.exports = {
    lang: 'en-US',
    title: 'Untitled Bot Organisation',
    description: 'Discord bots, open source, free, forever.',

    theme: defaultTheme({
            navbar: [
                {
                    text: 'Home',
                    link: '/'
                },
                {
                    text: 'Docs',
                    children: ['/docs/lily.md'],
                }
            ]
        }
    )
}
