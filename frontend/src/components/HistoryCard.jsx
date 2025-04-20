import React from 'react'

const HistoryCard = ({orderitem}) => {
  
  return (
    <div className='text-xl font-mono shadow-sm p-5 rounded-2xl'>
        <div className='flex justify-start gap-5 text-2xl font-semibold '>
            <div className="name">Order Id:</div>
            <div className="value">{orderitem[0].order_id}</div>
        </div>
        <div className="content">
            <div className="name">Name :{orderitem[0].customer_name}</div>
            <div className="name">Phone number :{orderitem[0].phone_number}</div>
        </div>
        <div className="items">
            <h1>Items</h1>
            {orderitem.map((item,index)=>(
                <div key={index}>
                    {item.item_name} - {item.quantity}
                </div>
            ))}
        </div>
    </div>
  )
}

export default HistoryCard