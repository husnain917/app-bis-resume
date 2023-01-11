import React, { useState } from 'react'
import style from '../../../../styles/blog/articles.module.css'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { blogData, articles } from './blogData'

export default function Articles() {
    const [load, setLoad] = useState(false)
    const data = articles.slice(0, 16)
    return (
        <div className={`${style.mainContainer} mainContainer`}>
            <Row>
                <Col lg={8} md={12} sm={12} xs={12} >
                    <Row>
                        {
                            blogData.map((item, index) => {
                                return (
                                    <Col key={index} lg={12}>
                                        <div className={style.blogContainer}>
                                            <div className={style.blogImage}>
                                                <Image src={item.image} alt='image' />

                                            </div>
                                            <div className={style.blogText}>
                                                <p className={`${style.blogTitle} subTitle`}>{item.title}</p>
                                                <p className={style.blogDate}>{item.date}</p>
                                                <p className={style.blogHeading}>{item.heading}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                    </Row>
                </Col>
                <Col lg={4} md={12} sm={12} xs={12} >
                    <div className={style.articlesContainer}>
                        <p className={`${style.blogTitle} subTitle`}>Popular Articles</p>
                        {(load ? articles : data).map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className={`${style.blogHeading} paragraph`}>{item.article}</p>
                                    <div className={style.hrLine} />
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <div className={style.buttonContainer}>
                        <button onClick={() => setLoad(!load)} className={style.loadButton}>{load ? 'Less More' : 'Load More'}</button>
                    </div>
                </Col>
                <Col lg={3}></Col>

            </Row>
        </div>
    )
}
