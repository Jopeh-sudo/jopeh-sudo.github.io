// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://Jopeh-sudo.github.io/',
	integrations: [
		starlight({
			title: 'Student led confrence #1',
			logo: { src: '/public/favicon.svg', replacesTitle: false, },
			social: [],
			plugins: [
				catppuccin({
					dark: { flavor: "mocha", accent: "red" },
					light: { flavor: "latte", accent: "red" }
				})
			],
			sidebar: [
				{
					label: '😀 Introduction',
					link: '/home/intro'
				},
				{
					label: '🧠 Learing Skills',
					autogenerate: { directory: 'skills' }
				},
				{
					label: '📚 Portfolio Examples',
					autogenerate: { directory: 'portfolio' }
				},
				{
					label: '📝 Progress report reflections',
					autogenerate: { directory: 'reflections' }
				},
			],
		}),
	],
});
