import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "היפרבארי - רפואה היפרבארית - תא לחץ",
	tagline: "מידע למטופלים בתא לחץ - כל מה שצריך לדעת במקום אחד",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://hyperbari.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "hyperbari", // Usually your GitHub org/user name.
	projectName: "hyperbari.github.io", // Usually your repo name.
	trailingSlash: false, // https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese,
	// you may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "he",
		locales: ["he"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					routeBasePath: "/",
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl: "https://github.com/hyperbari/hyperbari.github.io",
				},
				blog: false, // Optional: Disable blog if not needed
				// blog: {
				// 	showReadingTime: true,
				// 	feedOptions: {
				// 		type: ["rss", "atom"],
				// 		xslt: true,
				// 	},
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	//   editUrl:
				// 	//     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				// 	// Useful options to enforce blogging best practices
				// 	onInlineTags: "warn",
				// 	onInlineAuthors: "warn",
				// 	onUntruncatedBlogPosts: "warn",
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		// image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "היפרבארי",
			logo: {
				alt: "לוגו צוללן",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "כל המידע",
				},
				// { to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/hyperbari/hyperbari.github.io",
					label: "קוד מקור",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "מדריכים",
					items: [
						{
							label: "כל המידע",
							to: "/", // change if the path to all info changes
						},
					],
				},
				// {
				// 	title: "Community",
				// 	items: [
				// 		{
				// 			label: "Stack Overflow",
				// 			href: "https://stackoverflow.com/questions/tagged/docusaurus",
				// 		},
				// 		{
				// 			label: "Discord",
				// 			href: "https://discordapp.com/invite/docusaurus",
				// 		},
				// 		{
				// 			label: "X",
				// 			href: "https://x.com/docusaurus",
				// 		},
				// 	],
				// },
				// {
				// 	title: "More",
				// 	items: [
				// 		{
				// 			label: "Blog",
				// 			to: "/blog",
				// 		},
				// 		{
				// 			label: "GitHub",
				// 			href: "https://github.com/facebook/docusaurus",
				// 		},
				// 	],
				// },
			],
			copyright: `נוצר מכל ה-💙 לכל המטופלים בתאי לחץ בעבר, בהווה ובעתיד. כל הזכויות שמורות © ${new Date().getFullYear()}. 
            <br/>
            צרכו את התוכן בזהירות המתבקשת. האתר נוצר להנגשה של מידע וייתכן ויהיו אי דיוקים. אין האמור מהווה המלצה רפואית.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
