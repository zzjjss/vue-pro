import { getSong } from '@/api/home'

import {
  SET_PLAYLIST,
  SET_PLAYLIST_INDEX,
  SONG_DETAIL,
  SET_PLAYING_STATE
} from './mutation-types'

export default {
  async selectPlay({ commit, state }, { list, index }) {
    commit(SET_PLAYLIST, list)
    commit(SET_PLAYLIST_INDEX, index)
    const id = list[index].id
    const songDetail = await getSong({ id })
    console.log(songDetail)
    commit(SONG_DETAIL, songDetail.data[0])
    commit(SET_PLAYING_STATE, false)
  },
  setPlayingState({ commit }, flag) {
    commit(SET_PLAYING_STATE, flag)
  }
}
