import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) =>{
    return(
        <Head>
            <title>{title} - PalpiteBox</title>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    )
}

export default PageTitle