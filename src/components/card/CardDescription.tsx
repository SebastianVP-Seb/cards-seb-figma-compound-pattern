import React, { useContext } from 'react'
import { propsDescription } from '../../interfaces/cardInterfaces';
import { DescriptionWrapper } from '../../styledComponents/card/CardDescription.styles';
import { contextCard } from './Card'

const CardDescription:React.FC<propsDescription> = ({description}) => {

    const {description: descriptionCntx} = useContext(contextCard);
  return (
    <DescriptionWrapper>
      <p>{descriptionCntx ? descriptionCntx : description}</p>
    </DescriptionWrapper>
  );
};

export default CardDescription;