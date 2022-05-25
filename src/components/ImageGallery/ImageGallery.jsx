import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
export default function ImageGallery({ items }) {
    return (
        < ul className="ImageGallery" >
            <ImageGalleryItem
                items={items}
            />
        </ul >
    )
}