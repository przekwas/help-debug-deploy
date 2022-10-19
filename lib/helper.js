import { baseURL } from './fetcher';

export default async function getPost(id) {
	try {
		const res = await fetch(`${baseURL}/api/posts`);

		const posts = await res.json();

		if (id) {
			return posts.find(value => value.id == id);
		}

		return posts;
	} catch (error) {
    console.log('fuck', error)
  }
}
