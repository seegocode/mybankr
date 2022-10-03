import React, {useState} from 'react'

const Transfer = ({completeTransaction, cancelTransaction, transactionType}) => {
    const [transactionDetails, setTransactionDetails] = useState({});

    function handleInput(e){
        const name = e.name;
        const value = e.value;

        setTransactionDetails((current)=>{
            return {
                ...current,
                [name] : value
            }
        })
    }

   
  return (
    <div className='transfer'>
        
        <form onSubmit={(e)=>{
            e.preventDefault();
            completeTransaction(transactionDetails, transactionType)
        }}>
            <div>
            <p className='cancel' onClick={cancelTransaction}>X</p>
        </div>
            <div>
            <label>amount:</label>

                <input type="number" name='amount' value={transactionDetails.amount || ""} onChange={(e)=>{
                        handleInput(e.target)
                }}/>
            </div>

           {transactionType === "transfer"&& <><div>
            <label>to:</label>

                <input type="text"  name='to' value={transactionDetails.to || ""} onChange={(e)=>{
                        handleInput(e.target)
                }}/>
            </div>

            <div>
                <label>note:</label>
                <input type="text"  name='note' value={transactionDetails.note || ""} onChange={(e)=>{
                        handleInput(e.target)
                }}/>
            </div>
            </>
}
           <div>
            <input type="submit" value={transactionType} />
           </div>

        </form>
    </div>
  )
}

export default Transfer