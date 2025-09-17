import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Download from 'yet-another-react-lightbox/plugins/download';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import Aos from 'aos';
import '../styles/Gallery.css';

const DEFAULT_BREAKPOINTS = {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: { type: 'bullets', clickable: true },
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    pagination: { type: 'fraction' },
  },
  1200: {
    slidesPerView: 2,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: { type: 'fraction' },
  },
};

const mergeBreakpoints = (defaultBps, customBps) => {
  if (!customBps) return defaultBps;
  return {
    ...defaultBps,
    ...Object.entries(customBps).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          ...(defaultBps[key] || {}),
          ...value,
        },
      }),
      {}
    ),
  };
};

const GallerySlider = ({
  title = 'Galeria',
  images = [],
  breakpoints,
  swiperProps = {},
  variant = 'main',
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const fullscreenRef = useRef(null);

  const mergedBreakpoints = mergeBreakpoints(DEFAULT_BREAKPOINTS, breakpoints);

  React.useEffect(() => {
    window.addEventListener('load', Aos.refresh);
    return () => window.removeEventListener('load', Aos.refresh);
  }, []);

  return (
    <>
      {variant !== 'none' && (
        <h2 className={`gallery__title gallery__title--${variant}`}>{title}</h2>
      )}
      <Swiper
        {...swiperProps}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
        breakpoints={mergedBreakpoints}
        spaceBetween={20}
        slidespercolumnfill='row'
        autoplay={{ disableOnInteraction: true, delay: 5000 }}
        navigation
        pagination={{ type: 'fraction', clickable: true }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.src || img.imageSrc}>
            <div className='slide-wrapper'>
              <img
                src={img.src || img.imageSrc}
                alt={img.alt || img.imageAlt}
                className='slide__img'
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((img) => ({
          src: img.src || img.imageSrc,
          alt: img.alt || img.imageAlt,
        }))}
        plugins={[Counter, Download, Fullscreen]}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
        fullscreen={{ ref: fullscreenRef }}
        on={{
          click: () => fullscreenRef.current?.enter(),
        }}
      />
    </>
  );
};

export default GallerySlider;
