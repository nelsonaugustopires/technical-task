import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const HeroAttr = ({ blok }) => (
	<div className="HeroAttr" {...storyblokEditable(blok)}>
		<div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 w-full items-center">
			{blok.AttributeBlock.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	</div>
);

export default HeroAttr;