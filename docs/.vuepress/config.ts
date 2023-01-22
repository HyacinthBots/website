import {defaultTheme} from "vuepress";


export default {
    base: '/',
    lang: 'en-US',
    title: 'HyacinthBots',
    description: 'Discord bots, open source, free, forever.',

    theme: defaultTheme({
		logo: 'https://raw.githubusercontent.com/HyacinthBots/art/main/branding/icons/Hyacinth%20transparent%20icon.png',
		toggleColorMode: 'Toggle color mode',
		toggleSidebar: 'Toggle sidebar',
		contributors: true,
		notFound: ['The page you are looking for does not exist or has been moved!'],

		editLink: true,
		editLinkText: 'Improve this page on GitHub',
        editLinkPattern: ':repo/edit/:branch/:path',

		repo: 'https://github.com/HyacinthBots/',
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
						link: '/bots/lily/about-lily.md'
					},
					{
						text: "Watchdog",
						link: '/bots/watchdog/about-watchdog.md'
					},
					{
						text: 'Allium',
						link: '/bots/allium/about-allium.md'
					}
				]
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
						link: '/bots/lily/about-lily.md',
						children: [
							{
								text: 'Commands',
								link: '/bots/lily/commands.md'
							},
							{
								text: 'GitHub',
								link: 'https://github.com/HyacinthBots/LilyBot'
							}
						]
					},
					{
						text: 'Watchdog',
						link: '/bots/watchdog/about-watchdog.md',
						children: [
							{
								text: 'GitHub',
								link: 'https://github.com/HyacinthBots/watchdog'
							}
						]
					},
					{
						text: 'Allium',
						link: '/bots/allium/about-allium.md',
						children: [
							{
								text: 'GitHub',
								link: 'https://github.com/HyacinthBots/allium'
							}
						]
					}
				]
			}
		]
	}),
}
