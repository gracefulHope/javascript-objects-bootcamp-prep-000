var playlist = {"Blue Man Group": "Shadows"}

function updatePlaylist (cList, artist, song){
  Object.assign(cList, {[artist]: song})
  return cList
}