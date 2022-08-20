import { cards } from '../../page/db';
import Exp from './Exp';
import { ListWrapperExp } from './expList.styled';

const ExpList = () => {

  return (
    <ListWrapperExp>
      {/* Extrayendo del item  */}
      {cards.map(({ description, title, urlImg}) => (
        <Exp
          description={description}
          title={title}
          urlImg={urlImg}
        />
      ))}
    </ListWrapperExp>
  );
};

export default ExpList;