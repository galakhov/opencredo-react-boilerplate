import React from 'react';
import Lightbox from 'react-images';

export default class LightBoxComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      lightboxIsOpen: true
    }
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  gotoPrevious() {
     // ..body here
  }
  gotoNext() {
    // ..body here
  }
  closeLightbox() {
    // ..body here
  }

  render() {
    return (
        <div className="lightbox">
            {
            /*
            https://github.com/jossmac/react-images/tree/master/src/components
            https://github.com/jossmac/react-images/blob/master/examples/src/app.js:

            <FormattedHTMLMessage {...messages.overview1} />

            const LIGHTBOX_IMAGE_SET = [
            {
            src: 'http://example.com/example/img1.jpg',
            srcset: [
            'http://example.com/example/img1_1024.jpg 1024w',
            'http://example.com/example/img1_800.jpg 800w',
            'http://example.com/example/img1_500.jpg 500w',
            'http://example.com/example/img1_320.jpg 320w',
            ],
            },
            {
            src: 'http://example.com/example/img2.jpg',
            srcset: [
            'http://example.com/example/img2_1024.jpg 1024w',
            'http://example.com/example/img2_800.jpg 800w',
            'http://example.com/example/img2_500.jpg 500w',
            'http://example.com/example/img2_320.jpg 320w',
            ],
            }
            ];

            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/atmo1.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/atmo2.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/aussen1.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/aussen2.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/aussen3.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/aussen4.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/besprechungsraum.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/ct.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/flur1.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/flur2.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/mrt0.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/mrt1.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/mrt2.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/mrt3.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/roentgen1.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/roentgen2.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/warteraum1.jpg
            /Users/dmitrigalakhov/Sites/_dev/radiologie_opencredo-react/src/static/images/galerie/warteraum2.jpg

            <Lightbox
            images={LIGHTBOX_IMAGE_SET}
            ...
            />

            const LIGHTBOX_IMAGE_SET = [
            {
            src: 'http://example.com/example/img1.jpg',
            caption: 'Sydney, Australia - Photo by Jill Smith',
            },
            {
            src: 'http://example.com/example/img2.jpg',
            }
            ];
                */
            }

            <Lightbox
            images={[
              {
                src: '/images/galerie/atmo1.jpg',
                caption: 'Impressionen 1',
              },
              {
                src: '/images/galerie/atmo2.jpg',
                caption: 'Impressionen 2',
              },
            ]}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.closeLightbox}
            backdropClosesModal
            />

        </div>

          );
        }
      }
