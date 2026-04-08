import Grid from '@/components/Grid';
import MainPage from '@/components/MainPage';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import HeroInfo from '@/components/HeroInfo';
import HeroAttr from '@/components/HeroAttr';
import AttrBlock from '@/components/AttrBlock';
import GridRow from '@/components/GridRow';
import SavThrBlock from '@/components/SavThrBlock';
import SavThrAttr from '@/components/SavThrAttr';
import HPBlock from '@/components/HPBlock';
import DefenseAttr from '@/components/DefenseAttr';
import GeneralBlock from '@/components/GeneralBlock';
import SpellBlock from '@/components/SpellBlock';
import CombatBlock from '@/components/CombatBlock';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: {
		MainPage: MainPage,
		grid: Grid,
		gridRow: GridRow,
		HeroInfo: HeroInfo,
		HeroAttr: HeroAttr,
		AttrBlock: AttrBlock,
		SavThrBlock: SavThrBlock,
		SavThrAttr: SavThrAttr,
		HPBlock: HPBlock,
		DefenseAttr: DefenseAttr,
		GeneralBlock: GeneralBlock,
		SpellBlock: SpellBlock,
		CombatBlock: CombatBlock
	},
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: process.env.STORYBLOK_REGION || 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
});