/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id } = useParams();
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(id);
  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader
        id={id}
        artistData={artistData}
      />
      <RelatedSongs
        data={artistData?.songs}
        id={id}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;

