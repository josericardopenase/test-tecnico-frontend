import React, { useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { ThreeCircles } from  'react-loader-spinner'
import Spotify from '../../../api';

export default function Discover(props) {

  const [releaseLoaded, setReleaseLoaded] = useState(false)
  const [playlistLoaded, setPlaylistLoaded] = useState(false)
  const [categoriesLoaded, setCategoriesLoaded] = useState(false)
  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    Promise.all([
      Spotify.getNewReleases().then(setNewReleases).then(() => setReleaseLoaded(true)),
      Spotify.getFeaturedPlaylists().then(setPlaylists).then(() => setPlaylistLoaded(true)),
      Spotify.getCategories().then(setCategories).then(() => setCategoriesLoaded(true)),
    ]);
    return () => { console.warn("Unmounting..")
    };
  }, []);

 return (
      <div className="discover">
        { releaseLoaded ? (<DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} /> ) : (<ThreeCircles color="#00BFFF" height={80} width={80} /> )}
        { playlistLoaded ? ( <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} /> ) : (<ThreeCircles color="#00BFFF" height={80} width={80} /> )}
        { categoriesLoaded ? ( <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" /> ) : (<ThreeCircles color="#00BFFF" height={80} width={80} /> )}

      </div>
    );
}
