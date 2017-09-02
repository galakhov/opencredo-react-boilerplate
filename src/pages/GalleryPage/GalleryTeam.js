import React from 'react';
// import { render } from 'react-dom';
import Gallery from './GalleryWithThumbnails';

function makeUnsplashSrc(id) {
  // return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
  return id;
}

function makeUnsplashSrcSet(id, size) {
  // return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
  // return id + '_' + size + '.jpg';
  // const s = 'w=' + size;
  const str = `?${size}`;
  return id + str;
}
function makeUnsplashThumbnail(id, orientation = 'landscape') {
  const dimensions = orientation === 'square'
		? '?w=300&h=300'
		: '?w=240&h=159';

  // return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
  return id + dimensions;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

const THEMED_IMAGES = [
  {
    id: './images/team/dabir.jpg',
    caption: 'Dr. med. K. Dabir',
    orientation: 'landscape',
    useForDemo: true,
  },
  {
    id: './images/team/hirning.jpg',
    caption: 'Dr. med. M. Hirning',
    orientation: 'landscape',
    useForDemo: true,
  },
  {
    id: './images/team/poll.jpg',
    caption: 'Prof. Dr. med. L. W. Poll',
    orientation: 'landscape',
    useForDemo: true,
  },
  {
    id: './images/team/dabir_scherfeld.jpg',
    caption: 'Dr. med. D. Dabir-Scherfeld',
    orientation: 'landscape',
    useForDemo: true,
  },
  {
    id: './images/team/meyer.jpg',
    caption: 'Dr. med. D. Meyer',
    orientation: 'landscape',
    useForDemo: true,
  },
];

const theme = {
	// container
  container: {
    background: 'rgba(255, 255, 255, 0.9)',
  },

	// arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 700ms',

    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  header: {
    top: '45px',
    right: '15px',
    position: 'relative',
  },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },

  // footer
  footer: {
    color: 'black',
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)',
  },

  // thumbnails
  thumbnail: {
  },
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF',
  },
};

const LightboxGalleryTeam = () =>
(
  <div>
  {
        /*
        <div style={{ marginBottom: 40 }}>
    			<p>Photos courtesy of <a href="https://unsplash.com/" target="_blank">Unsplash</a>. Use your keyboard to navigate <kbd>left</kbd> <kbd>right</kbd> <kbd>esc</kbd> &mdash; Also, try resizing your browser window.</p>
    		</div>
    		<h3>Default Options</h3>
    		<Gallery images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
    			src: makeUnsplashSrc(id),
    			thumbnail: makeUnsplashThumbnail(id, orientation),
    			srcset: [
    				makeUnsplashSrcSet(id, 1024),
    				makeUnsplashSrcSet(id, 800),
    				makeUnsplashSrcSet(id, 500),
    				makeUnsplashSrcSet(id, 320),
    			],
    			caption,
    			orientation,
    			useForDemo,
    		}))} />

        <h3>With Thumbnails</h3>
        <Gallery images={THUMBNAIL_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
          src: makeUnsplashSrc(id),
          thumbnail: makeUnsplashThumbnail(id, orientation),
          srcset: [
            makeUnsplashSrcSet(id, 1024),
            makeUnsplashSrcSet(id, 800),
            makeUnsplashSrcSet(id, 500),
            makeUnsplashSrcSet(id, 320),
          ],
          caption,
          orientation,
          useForDemo,
        }))}
          showThumbnails
        />
        */
  }

  <Gallery images={THEMED_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
    src: makeUnsplashSrc(id),
    thumbnail: makeUnsplashThumbnail(id, orientation),
    srcset: [
      makeUnsplashSrcSet(id, 1024),
      makeUnsplashSrcSet(id, 800),
      makeUnsplashSrcSet(id, 500),
      makeUnsplashSrcSet(id, 320),
    ],
    caption,
    orientation,
    useForDemo,
  }))} theme={theme}
    backdropClosesModal
    showThumbnails
  />
</div>
);

export default LightboxGalleryTeam;
