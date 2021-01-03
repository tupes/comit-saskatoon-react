
const TableList = ({letters}) => {
    return(
      <> 
          <table>
              <thead>
                <tr>
                    <th>Date</th>
                    <th>From</th>
                    <th>Subject</th>
                </tr>      
              </thead>  
              <tbody>
                {letters.map( (letter) => {
                const {id, date, emailFrom,subject } = letter;
                return(
            
                    <tr key={id}>
                        <th>{date}</th>
                        <th>{emailFrom}</th>
                        <th>{subject}</th>
                    </tr>  
                )})}
              </tbody>              
              <tfoot></tfoot>
          </table>   
          </>      
    )
}                        
      
   


export default TableList;       