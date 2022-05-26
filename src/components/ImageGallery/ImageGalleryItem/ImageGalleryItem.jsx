import styles from "./styles.module.css"
export default function ImageGalleryItem({ items, onClick }) {
    return (
        items.map(e => <li key={e.id} className={styles.imageGalleryItem}>
            <img onClick={() => { onClick(e.largeImageURL) }} className={styles.image} src={e.webformatURL} alt={e.tags} />
        </li>
        ))
} 