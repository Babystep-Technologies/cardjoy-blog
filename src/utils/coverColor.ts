// Deterministic hue (0-359) derived from a string (e.g. a post title) so that
// posts without a heroImage get a stable, distinct gradient cover across rebuilds.
export function coverHue(seed: string): number {
	let h = 0;
	for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
	return h;
}
