import type { PageLoad } from './$types';

export const load = (async () => {
    return { title: 'Identify' };
}) satisfies PageLoad;