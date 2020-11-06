import ClientsList from './ClientsList';
import NavSideMenu from './NavSideMenu';

const Container = () => {
  return (
    <div className="container">
     <NavSideMenu />

    <div className="section">
        <table border="true">
            <tr>
                <th>Date</th>
                <th>From</th>
                <th>Subject</th>
            </tr>
            <tr>
                <td>2020-10-01</td>
                <td>Mark_Tupala.gmail.com</td>
                <td>Readings</td>
            </tr>
            <tr>
                <td>2020-10-07</td>
                <td>Liliya@gmaol.com</td>
                <td>Readings</td>
            </tr>
            <tr>
                <td>2020-10-01</td>
                <td>Mark_Tupala.gmail.com</td>
                <td>Readings</td>
            </tr>
            <tr>
                <td>2020-10-07</td>
                <td>Liliya@gmaol.com</td>
                <td>Readings</td>
            </tr>
            <tr>
                <td>2020-10-01</td>
                <td>Mark_Tupala.gmail.com</td>
                <td>Readings</td>
            </tr>
            <tr>
                <td>2020-10-07</td>
                <td>Liliya@gmaol.com</td>
                <td>Readings</td>
            </tr>
        </table>

        <div>
            <p>ID105757</p>
            <p>Mon, 9 Dec 2019</p>
            <div className="from">
                <input type="text" value="Do not replay..."></input>
                {/* <!-- <span><label>From</label></span> --> */}
            </div>
            <div className="subject">
                <input type="text" value="Millitary report"></input>
                {/* <!-- <span>Subject</span> --> */}
            </div>
            <div>
                <textarea>fghfghfghfghfghfghfghfghfghfhfghfghfghfghfghfghfghfghfghfghfghfghfghfgh</textarea>
            </div>
        </div>
        <div>
            <button>REPLY</button>
            <button>DELETE</button>
        </div>
    </div>
    <ClientsList /> 

</div>
  )
}



export default Container;
