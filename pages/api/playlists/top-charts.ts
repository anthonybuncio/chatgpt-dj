import { playlistData } from "@/lib/spotify";

export default async function handler(req, res) {
	const playlistID = "37i9dQZEVXbLRQDuF5jeBp";

	const response = await playlistData(playlistID);
	const data = await response.json();

	const playlist = data?.tracks?.items?.map((song) => ({
		artist: song.track.artists.map((_artist) => _artist.name).join(", "),
		title: song.track.name,
		url: song.track.href,
		coverImage: song.track.album.images[1],
	}));

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=86400, stale-while-revalidate=43200"
	);

	return res.status(200).json(playlist);
}