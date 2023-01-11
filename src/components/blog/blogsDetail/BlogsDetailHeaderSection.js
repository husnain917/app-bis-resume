import moment from 'moment'
import React from 'react'
import style from '../../../../styles/blog/blogsDetailHeaderSection.module.css'
export default function BlogsDetailHeaderSection({ data }) {

    const convrtDate = moment(data?.date).format('MMMM Do YYYY')
    return (
        <div
            style={{
                backgroundImage: `url(${data?.thumbnail})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className={style.bgImage}>
            <div className={style.bgColor}>
                <div className='mainContainer'>
                    <div className={style.circleTextContainer}>
                        <p className={`${style.circleText} linkText`}>{data?.category || 'Technology'}</p>
                    </div>
                    <div>
                        <h1 className={`${style.title} title`}>
                            {data?.title}
                        </h1>
                    </div>
                    <div className={style.txtContainer}>
                        {data?.author && <span className={`${style.txt1} linkText`}>By {data?.author}</span>}
                        {data?.date && <span className={`${style.txt2} linkText`}>{convrtDate}</span>}
                        {data?.readTitme && <span className={`${style.txt2} linkText`}>{data?.readTitme}</span>}



                    </div>
                </div>
            </div>
        </div>
    )
}
