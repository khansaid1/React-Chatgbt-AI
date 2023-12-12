import React from 'react';
import './brand.css';
import google from '../../public/images/google.png'
import slack from '../../public/images/slack.png'
import atlassian from '../../public/images/atlassian.png'
import dropbox from '../../public/images/dropbox.png'
import shopify from '../../public/images/shopify.png'

const Brand = () => {
  return (
    <div className='gbt3__brand section__padding'>
        <div>
        <img src={google} alt='google'/>
        </div>
        <div>
        <img src={slack} alt='slack'/>
        </div>
        <div>
        <img src={atlassian} alt='atlasssian'/>
        </div>
        <div>
        <img src={dropbox} alt='dropbox'/>
        </div>
        <div>
        <img src={shopify} alt='shopify'/>
        </div>
    </div>
  )
}

export default Brand;