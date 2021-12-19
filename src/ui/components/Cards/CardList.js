import { Card } from './Card'

export const CardList = ({offerList}) => {

  /* Aqui se manda la informacion de cada CARD dentro del map */
  return (
    <>
      <div className='container__list__card'>
        {
          offerList.map( offer => (
            <Card key={ offer.created } { ...offer }/>
          ))
        }
      </div>
    </>
  )
}
