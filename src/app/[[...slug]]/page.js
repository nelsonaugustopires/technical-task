import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import { useStoryblokBridge } from '@storyblok/react';

export default async function Page({ params }) {
	const { slug } = await params;

	let fullSlug = slug ? slug.join('/') : 'hero';

	let sbParams = {
		version: 'draft',
		cv: Date.now()
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);

	//useStoryblokBridge(data.story);

	
	//return <div>{JSON.stringify(data, null, 2)}</div>
	return <div>
		<StoryblokStory story={data.story} />
	</div>;
}
