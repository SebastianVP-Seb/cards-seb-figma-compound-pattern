import { createContext } from 'react';
import { propsCard, valuesCard } from '../../interfaces/cardInterfaces';
// import CardImage from './CardImage';
// import { CardListWrapper } from '../../styledComponents/card/CardList.styles';

export const contextCard = createContext<valuesCard>({});
const { Provider } = contextCard;

const Card = ({ children, values = {} }: propsCard) => {

  console.log(values.urlImg )

  return (
    <Provider value={values} >
      {/* <CardListWrapper  > */}
        <div className="card">
          {children}
        </div>
        {/* <CardImage /> */}
      {/* </CardListWrapper> */}
    </Provider>
  );
};

export default Card;