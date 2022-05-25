export default function ImageGalleryItem({ items }) {
    return (

        items.map(e => <li key={e.id} className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={e.webformatURL} alt={e.tags} />
        </li>
        ))
} 