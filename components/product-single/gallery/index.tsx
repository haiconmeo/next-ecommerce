import { ImageProduct } from "types";

type GalleryProductType = {
  images: ImageProduct[]
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map(image => (
          <div key={image.id} className="product-gallery__thumb">
            <img src={image.imageUrl} alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={featImage.imageUrl} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  