import PropTypes from 'prop-types';
import styles from "./styles.module.css"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
export default function ImageGallery({ items, onClick }) {
    return (
        < ul className={styles.imageGallery} >
            <ImageGalleryItem
                items={items}
                onClick={onClick}
            />
        </ul >
    )
}