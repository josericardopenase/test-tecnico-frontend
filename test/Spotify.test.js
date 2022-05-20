/**
 * @jest-environment jsdom
 */
import Spotify from '../src/api'
import {screen} from '@testing-library/dom'
import React from "react";
import {render } from '@testing-library/react'
import Discover from "../src/routes/Discover";


// Data
const categories = [
  { images: [ {url: "https://localhost"} ],
    name: "Category 1",
  },
  { images: [ {url: "https://localhost"} ],
    name: "Category 2",
  },
  { images: [ {url: "https://localhost"} ],
    name: "Category 3",
  },
  ];
const newReleases = [
  { images: [ {url: "https://localhost"} ],
    name: "Release 1",
  },
  { images: [ {url: "https://localhost"} ],
    name: "Release 2",
  },
  { images: [ {url: "https://localhost"} ],
    name: "Release 3",
  },
  ];
const playlists = [
  { images: [ {url: "https://localhost"} ],
    name: "Playlist 1",
  },
  { images: [ {url: "https://localhost"} ],
    name: "Playlist 2",
  },
  { images: [ {url: "https://localhost"} ],
    name: "Playlist 3",
  },
  ];


//Mocking
const mockGetNewReleases = jest.spyOn(Spotify, 'getNewReleases');
mockGetNewReleases.mockResolvedValue(newReleases);
const mockGetPlaylists = jest.spyOn(Spotify, 'getFeaturedPlaylists');
mockGetPlaylists.mockResolvedValue(playlists);
const mockGetCategories = jest.spyOn(Spotify, 'getCategories');
mockGetCategories.mockResolvedValue(categories);

test("<Discover/> show Releases, Categories and Playlist", () => {
  render(<Discover />);
  categories.map(obj => {
    expect(screen.findByText(obj.name)).toBeTruthy();
  });
  playlists.map(obj => {
    expect(screen.findByText(obj.name)).toBeTruthy();
  });
  newReleases.map(obj => {
    expect(screen.findByText(obj.name)).toBeTruthy();
  });

});


