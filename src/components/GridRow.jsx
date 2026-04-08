import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const GridRow = ({ blok }) => (
	<div {...storyblokEditable(blok)} className="gridRow flex-auto w-auto min-w-max flex flex-col gap-6 bg-stone-900/40 p-4 rounded-xl border border-stone-800">
		{blok.rows.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default GridRow;
