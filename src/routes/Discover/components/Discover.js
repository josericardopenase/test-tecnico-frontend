import React, { useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import Spotify from '../../../api';

export default function Discover(props) {

  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    Promise.all([
      Spotify.getNewReleases().then(setNewReleases),
      Spotify.getFeaturedPlaylists().then(setPlaylists),
      Spotify.getCategories().then(setCategories),
    ]);
    return () => {
    };
  }, []);

 return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
}
