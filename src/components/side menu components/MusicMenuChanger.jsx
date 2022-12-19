import { MusicMenuButtonMap } from "../SideMenuButtonMaps/MusicMenuButtonMap";
import AudioSource from "./AudioSource";

const MusicMenuChanger = (props) => {
  return (
    <ul className={`musicMenu${props.musicMenuState ? "  opened" : " closed"}`} >
      {MusicMenuButtonMap.map((item, index) => {
        return (
          <div key={index}>
            {/*Return Audio Item JSX*/}
            <AudioSource 
              classesNames={item.MusicMenuButton}
              song={item.songName}
              color={item.hex_value}
              MusicPlayingTracker={props.MusicPlayingTracker}
              MusicPlayingTrackerButton={props.MusicPlayingTrackerButton}
              src={item.SongListLocation}
            ></AudioSource>
          </div>
        );
      })}
    </ul>
  );
};

export default MusicMenuChanger;
