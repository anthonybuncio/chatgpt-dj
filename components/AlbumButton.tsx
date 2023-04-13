type ArtistProps = {
  artist: string;
  coverImage: string;
  id: number;
  title?: string;
};

const AlbumButton = ({ artist, coverImage, title }: ArtistProps) => {
  return (
    <div className="flex flex-shrink-0 flex-col w-full sm:w-auto cursor-pointer text-black dark:text-white">
      <div className="w-32 h-32">
        <img
          src={coverImage}
          alt={title ?? artist}
          className="object-cover object-center h-full w-full rounded-lg"
        />
      </div>
      <div className="bg-opacity-30 w-32 h-full py-2 text-left truncate">
        <div className="flex">
          <span className="text-sm leading-5 lg:leading-6 ">{artist}</span>
        </div>
        {title && (
          <span className="text-xs leading-4 lg:leading-5">{title}</span>
        )}
      </div>
    </div>
  );
};

export default AlbumButton;
