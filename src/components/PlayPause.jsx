/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song,
handelPauseClick, handelPlayClick }) => (isPlaying && activeSong?.title === song.title
  ? (<FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handelPauseClick}
  />
)
  : (<FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handelPlayClick}
  />
));

export default PlayPause;
