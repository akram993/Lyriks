/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { TopArtists } from '../pages';

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();
  const handelPauseClick = () => {
    dispatch(playPause(false));
  };

  const handelPlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center group-hover:flex opacity-50 bg-black  ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : 'hidden'}`}>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handelPauseClick={handelPauseClick}
          handelPlayClick={() => handelPlayClick(song, i)}
        />
      </div>
      <img alt="song-imag" src={song.images?.coverart} />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link to={`/songs/${song?.key}`}>{song.title}</Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : `/top-artists`}>{ song.subtitle } </Link>
      </p>
    </div>
  </div>
  );
};

export default SongCard;
