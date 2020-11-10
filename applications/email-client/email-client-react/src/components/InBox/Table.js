
const TableList = ({letters}) => {
    return(
      <> 
          <table >
                <tr>
                <th>Date</th>
                <th>From</th>
                <th>Subject</th>
            </tr>      
            {letters.map( (letter) => {
            const {id, date, emailFrom,subject } = letter;
            return(
          
                <tr key={id}>
                    <th>{date}</th>
                    <th>{emailFrom}</th>
                    <th>{subject}</th>
                </tr>  
            )})}
          </table>   
          </>      
    )
}                        
      
   


export default TableList;       