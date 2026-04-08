import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const DefenseAttr = ({ blok }) => (
	<div {...storyblokEditable(blok)} className="flex">
		{blok.attributes.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default DefenseAttr;
