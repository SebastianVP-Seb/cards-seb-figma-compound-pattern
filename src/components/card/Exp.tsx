import { valuesCard } from '../../interfaces/cardInterfaces';
import CardDescription from './CardDescription';
import CardHeader from './CardHeader';
import CardName from './CardName';
import CardParagrah from './CardParagrah';
import { ExpWrapper } from './exp.styled';

const Exp = ({urlImg, title, description}: valuesCard) => {

  return (
    <ExpWrapper >
        <div 
            style={{backgroundImage: ` url(${urlImg})`, backgroundSize: 'cover', 
              height: '90%', width: '90%' , backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center', margin: '0 auto'}}
          >
            <CardHeader title={title} />
            <CardParagrah />
            <CardName />
            <CardDescription description={description} />
        </div>
    </ExpWrapper >
  );
};

export default Exp;