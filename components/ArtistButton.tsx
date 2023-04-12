type ArtistProps = {
  artist: string;
  coverImage: string;
  id: number;
  title?: string;
};

const ArtistButton = ({ artist, coverImage, title }: ArtistProps) => {
  return (
    <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer">
      <div className="w-full h-48">
        <img
          src={coverImage}
          alt={title ?? artist}
          className="object-cover object-center h-full w-full rounded-lg"
        />
      </div>
      <div className="bg-opacity-30 absolute w-full h-full p-6">
        {title && (
          <span className="lg:text-lg leading-4 text-base lg:leading-5 text-white dark:text-white">
            {title}
          </span>
        )}
        <div className="flex h-full items-end">
          <h1 className="text-lg lg:text-xl font-semibold leading-5 lg:leading-6 text-white dark:text-white">
            {artist}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ArtistButton;
