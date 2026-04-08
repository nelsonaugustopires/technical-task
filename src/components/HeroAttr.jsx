import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const HeroAttr = ({ blok }) => (
	<div className="HeroAttr" {...storyblokEditable(blok)}>
		<div className="flex flex-col gap-6 w-min">
			{blok.AttributeBlock.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	</div>
);

export default HeroAttr;