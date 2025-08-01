import React from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "../../base.css";
import { NavLink } from "react-router";

const defaultImages = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
  },
];

const authImages = [
  {
    original:
      "https://www.scania.com/content/dam/www/market/master/products/transport-operations/agriculture/18182-004.jpg",
    thumbnail:
      "https://www.scania.com/content/dam/www/market/master/products/transport-operations/agriculture/18182-004.jpg",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
    originalHeight: "500px",
    originalWidth: "500px",
  },
  {
    original:
      "https://www.scania.com/content/dam/www/market/master/products/transport-operations/agriculture/18182-004.jpg",
    thumbnail:
      "https://www.scania.com/content/dam/www/market/master/products/transport-operations/agriculture/18182-004.jpg",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
    originalHeight: "500px",
    originalWidth: "500px",
  },
  {
    original:
      "https://www.scania.com/content/dam/www/market/master/products/transport-operations/agriculture/18182-004.jpg",
    thumbnail:
      "https://www.scania.com/content/dam/www/market/master/products/transport-operations/agriculture/18182-004.jpg",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
    originalHeight: "500px",
    originalWidth: "500px",
  },
];

export function MainCarouselTransition({ images, url }) {
  return (
    <NavLink>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={false}
        lazyLoad={false}
        showNav={true}
        showThumbnails={false}
      />
    </NavLink>
  );
}

export function SubCarouselTransition({ images, url }) {
  return (
    <NavLink>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={false}
        lazyLoad={false}
        showNav={true}
        showThumbnails={false}
        sizes={500}
      />
    </NavLink>
  );
}

export function CarouselTransition({ images = defaultImages }) {
  return (
    <NavLink>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showBullets={false}
        lazyLoad={true}
        showNav={true}
        showThumbnails={true}
      />
    </NavLink>
  );
}

export function AuthImages() {
  return (
    <ImageGallery
      items={authImages}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={true}
      lazyLoad={true}
      showNav={false}
      //    height={1000}
      showThumbnails={false}
      sizes="(max-width: 1024px) 1280, (max-width: 1024px) 1280w, 2400px"
    />
  );
}
