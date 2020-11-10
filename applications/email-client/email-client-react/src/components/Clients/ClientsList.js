import { BsPerson } from 'react-icons/bs';

const ClientsList = ({clients}) => {
  return(
    <>    
    <div  className="right_sidebar">
      {clients.map( (client) => {

        const { id, firstName, lastName} = client;
        return(
            <dl key={id}>
                <dt >
                <BsPerson class="icon" ></BsPerson>                  
                    <p>{ firstName} {lastName}</p>
                </dt>                   
            </dl>
            )
          })
        }
    </div>
    </>
  )  
}

export default ClientsList;

