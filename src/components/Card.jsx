const Card = ({avatar, name, status, comment}) => {
    
    return ( 
        <div className="card-container">
            <div className="card-head">
                <div>
                    <img className='avatar' src={avatar} alt="profile avatar"/>
                </div>
                <div>
                    <h1 className='name'>{name}</h1>
                    <p className='status'>{status}</p>
                </div>
            </div>
            <div className="card-body">
                <q className='comment'>
                    {comment}
                </q>
            </div>
        </div>
     );
}
 
export default Card;