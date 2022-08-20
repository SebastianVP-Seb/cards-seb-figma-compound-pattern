import React, { useContext } from 'react'
import { propsImage } from '../../interfaces/cardInterfaces'
import { WrapperImg } from '../../styledComponents/card/Image.styles'
import { contextCard } from './Card'

const CardImage: React.FC<propsImage> = ({ imgUrl, alt }) => {

    const {urlImg: urlImgCntx }=useContext(contextCard);

    const imgShow= urlImgCntx ? urlImgCntx : imgUrl;

    return (
        <WrapperImg>
            <img src={imgShow} alt={alt} />
        </WrapperImg>
    )
}

export default CardImage