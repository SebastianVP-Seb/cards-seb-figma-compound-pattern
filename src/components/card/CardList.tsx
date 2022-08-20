import { createContext } from 'react';
import { propsCard, valuesCard } from '../../interfaces/cardInterfaces';
import { CardListWrapper } from '../../styledComponents/card/CardList.styles';

export const contextCard = createContext<valuesCard>({});
const { Provider } = contextCard;

const CardList = ({ children, values = {} }: propsCard) => {
    return (
        <Provider value={values} >
          <CardListWrapper  >
            <div className="card">
              {children}
            </div>
          </CardListWrapper>
        </Provider>
      );
};

export default CardList;