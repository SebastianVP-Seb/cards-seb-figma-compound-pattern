import Card from '../components/card/Card';
import CardDescription from '../components/card/CardDescription';
import CardHeader from '../components/card/CardHeader';
import CardImage from '../components/card/CardImage';
import CardList from '../components/card/CardList';
import { cards } from './db';

const CompoundPattern = () => {
  return (
    <CardList>
      {
        cards.map((item) => (
          <div style={{backgroundImage: ` url(${item.urlImg})`, backgroundSize: 'cover', 
            height: '100%', width: '100%' , backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
          }}>
          <Card values={item} >
            <CardHeader />
            <CardImage />
            <CardDescription />
          </Card>
          </div>
        ))
      }
    </CardList>
  );
};

export default CompoundPattern;