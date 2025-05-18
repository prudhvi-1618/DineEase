import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api';
import HistoryCard from './HistoryCard';

const User = () => {
  const { phone_number } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title="Dine Ease - Past Bites, Future Cravings!";
    async function fetch() {
      try {
        const res = await api.get(`/order/history/${phone_number}`);
        setItems(res.data.order);
        console.log(res.data.order);
        
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    }
    fetch();
  }, [phone_number]);

  return (
    <div className='flex-1 md:mx-32 '>
      {items.map((item, index) => (
        item?<HistoryCard key={index} orderitem={item} />:null
      ))}
    </div>
  );
}

export default User;
