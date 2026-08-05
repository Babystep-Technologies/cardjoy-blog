import { getCollection } from 'astro:content';

/**
 * Blog posts that are live as of build time, newest first.
 *
 * Posts with a future `pubDate` stay out of the index, the RSS feed and the
 * generated routes until a build runs on or after that date — so a post can be
 * committed early and still appear on the day it's meant to.
 */
export async function getPublishedPosts() {
	const now = Date.now();
	return (await getCollection('blog'))
		.filter((post) => post.data.pubDate.valueOf() <= now)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
