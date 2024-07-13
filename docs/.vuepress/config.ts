// noinspection JSUnusedGlobalSymbols

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress"


export default defineUserConfig({
    base: '/',
    lang: 'en-US',
    title: 'HyacinthBots',
    description: 'Discord bots, open source, free, forever.',
	bundler: viteBundler(),

    theme: defaultTheme({
		logo: 'https://raw.githubusercontent.com/HyacinthBots/art/main/branding/icons/Hyacinth%20transparent%20icon.png',
		contributors: false,
		notFound: ['The page you are looking for does not exist or has been moved! :('],

		editLink: true,
		editLinkText: 'Improve this page on GitHub',
        editLinkPattern: ':repo/edit/:branch/:path',

		repo: 'https://github.com/HyacinthBots/',
		docsRepo: 'https://github.com/HyacinthBots/website',
		docsBranch: 'main',
		docsDir: 'docs',

		navbar: [
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
				prefix: "/bots/",
				children: [
					{
						text: 'Lily',
						link: 'lily/about-lily.md',
						children: [
							{
								text: 'Commands',
								link: 'lily/commands.md'
							},
							{
								text: 'GitHub',
								link: 'https://github.com/HyacinthBots/LilyBot'
							}
						]
					},
					{
						text: 'Watchdog',
						link: 'watchdog/about-watchdog.md',
						children: [
							{
								text: 'GitHub',
								link: 'https://github.com/HyacinthBots/watchdog'
							}
						]
					},
					{
						text: 'Allium',
						link: 'allium/about-allium.md',
						children: [
							{
								text: 'GitHub',
								link: 'https://github.com/HyacinthBots/allium'
							}
						]
					}
				]
			}
		],
		sidebarDepth: 1
	}),
})
