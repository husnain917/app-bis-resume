import React from 'react'
import CommonHeaderSection from '../../../commonComponents/commonHeaderSection/CommonHeaderSection';

export default function BlogHeaderSection() {
    const img = "/images/blog/blogHeaderSection/bgImage.webp";
    const items = {
        title: 'TechloSet Blog', heading: 'Keep up with the IT news',
        bgImage: img, iconsTitle: 'Share blog', icons: true, typeWriter: false
    }
    return (
        <div>
            <CommonHeaderSection items={items} />
        </div>
    )
}
