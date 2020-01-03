import {
  SET_PLAYLIST,
  SET_PLAYLIST_INDEX,
  SONG_DETAIL,
  SET_PLAYING_STATE
} from './mutation-types'

export default {
  [SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [SET_PLAYLIST_INDEX](state, index) {
    state.playlistSongIndex = index
  },
  [SONG_DETAIL](state, data) {
    state.songDetail = data
  },
  [SET_PLAYING_STATE](state, flag) {
    state.playState = flag
  }
}
